'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', text: string }>>([
    {
      type: 'bot',
      text: 'Hello! Welcome to Royal Leather. How can I help you today?'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = { type: 'user' as const, text: inputMessage }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage)
      setMessages(prev => [...prev, { type: 'bot' as const, text: botResponse }])
    }, 500)
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! How can I assist you with our premium leather shoes?'
    }
    if (message.includes('price') || message.includes('cost')) {
      return 'Our premium leather shoes range from PKR 14,500 to PKR 21,000. Would you like to see our catalog?'
    }
    if (message.includes('size') || message.includes('sizing')) {
      return 'We offer sizes from 7 to 12. We also provide custom sizing! Please visit our Size Guide page for more details.'
    }
    if (message.includes('delivery') || message.includes('shipping')) {
      return 'We offer Cash on Delivery (COD) nationwide! Delivery usually takes 3-5 business days. Check our Shipping & Returns page for more info.'
    }
    if (message.includes('color') || message.includes('colour')) {
      return 'We offer various colors including Black, Brown, Tan, Navy, Cognac, Charcoal, and Burgundy. Check product details for available colors!'
    }
    if (message.includes('order') || message.includes('buy') || message.includes('purchase')) {
      return 'You can order directly through WhatsApp or use our Buy Now button on product pages. We accept Cash on Delivery!'
    }
    if (message.includes('whatsapp')) {
      return 'You can contact us on WhatsApp at 03149339180. Click the "Order on WhatsApp" button to start a conversation!'
    }
    if (message.includes('return') || message.includes('exchange')) {
      return 'We offer returns and exchanges within 7 days of delivery. Please visit our Shipping & Returns page for full policy details.'
    }
    if (message.includes('leather') || message.includes('quality')) {
      return 'All our shoes are made from 100% genuine leather, handcrafted in Pakistan with premium quality and attention to detail.'
    }
    if (message.includes('custom') || message.includes('fit')) {
      return 'Yes! We offer custom fit and design options. You can specify your measurements when placing an order.'
    }
    if (message.includes('catalog') || message.includes('products') || message.includes('collection')) {
      return 'Browse our complete collection in the Catalog section. We have Oxford, Loafers, Brogue, Monk Strap, and Premium categories!'
    }

    return 'Thank you for your message! For more specific information, please visit our FAQ page or contact us on WhatsApp at 03149339180. How else can I help you?'
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-btn flex items-center justify-center shadow-lg transition-all hover:scale-110 ${
          isOpen ? 'hidden' : 'block'
        }`}
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6 text-dark-black" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] sm:h-[600px] bg-card-bg border border-card-border rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gold px-4 py-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-dark-black" />
              <h3 className="font-serif font-bold text-dark-black">Royal Leather Support</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dark-black hover:text-dark-black/70 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-black">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-gold text-dark-black'
                      : 'bg-card-bg border border-card-border text-white'
                  }`}
                >
                  <p className="font-sans text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="border-t border-card-border p-4 bg-card-bg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-dark-black border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="gold-btn px-4 py-2 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                aria-label="Send message"
              >
                <Send className="h-4 w-4 text-dark-black" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

