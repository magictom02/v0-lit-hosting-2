"use client"

import type React from "react"
import { memo, useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi there! How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

const ChatContent = memo(function ChatContent({
  messages,
  newMessage,
  onMessageChange,
  onSendMessage,
  onKeyPress,
  onMinimize,
  onClose,
}: {
  messages: Message[]
  newMessage: string
  onMessageChange: (value: string) => void
  onSendMessage: () => void
  onKeyPress: (e: React.KeyboardEvent) => void
  onMinimize: () => void
  onClose: () => void
}) {
  return (
    <div className="mb-2 animate-in fade-in scale-in-95 duration-300">
      <Card className="w-80 sm:w-96 shadow-lg border overflow-hidden">
        <div className="bg-[#3cdd4a] text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/support-avatar.png" alt="Support" />
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-sm">Lit-Hosting Support</h3>
              <p className="text-xs text-white/80">Typically replies in a few minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20" onClick={onMinimize}>
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="h-80 overflow-y-auto p-3 flex flex-col gap-3 bg-muted/30">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user" ? "bg-[#3cdd4a] text-white" : "bg-background border"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t flex gap-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyPress={onKeyPress}
            className="flex-1"
          />
          <Button className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white" onClick={onSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
})

export const LiveChat = memo(function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  const handleSendMessage = useCallback(() => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! How can I assist you with our hosting services today?",
        "I'd be happy to help with that. Could you provide more details?",
        "We offer various hosting plans. Would you like me to explain the differences?",
        "For technical support, I can connect you with one of our specialists. Would you like me to do that?",
        "Is there anything specific about our services you'd like to know more about?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }, [newMessage, messages.length])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  useEffect(() => {
    // Mark as mounted so component can render
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && !isMinimized && (
        <ChatContent
          messages={messages}
          newMessage={newMessage}
          onMessageChange={setNewMessage}
          onSendMessage={handleSendMessage}
          onKeyPress={handleKeyPress}
          onMinimize={() => setIsMinimized(true)}
          onClose={() => setIsOpen(false)}
        />
      )}

      {isOpen && isMinimized && (
        <div className="mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Button
            className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white shadow-lg flex items-center gap-2 pr-4"
            onClick={() => setIsMinimized(false)}
          >
            <Avatar className="h-6 w-6 border border-white">
              <AvatarImage src="/support-avatar.png" alt="Support" />
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
            <span>Lit-Hosting Support</span>
            <Maximize2 className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      <Button
        className={`rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-transform ${
          isOpen ? "bg-muted hover:bg-muted/80" : "bg-[#3cdd4a] hover:bg-[#2bb039]"
        }`}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false)
          } else {
            setIsOpen(true)
            setIsMinimized(false)
          }
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
})
