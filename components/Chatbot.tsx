"use client";

import { useState, useRef, useEffect } from "react";
import { client } from "@/config/client";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  {
    text: "Book Appointment",
    response: `You can book an appointment by calling ${client.phone} or WhatsApp us at the number below. We're open ${client.hours}, ${client.days}.`,
  },
  {
    text: "Services Offered",
    response:
      "We offer Root Canal Treatment, Dental Implants, Teeth Whitening, Crowns & Bridges, Braces & Aligners, Paediatric Dentistry, Tooth Extractions, Smile Makeover, and General Checkups.",
  },
  {
    text: "Location & Hours",
    response: `We're located at ${client.address}. Open ${client.hours}, ${client.days}.`,
  },
  {
    text: "Contact Info",
    response: `Call us at ${
      client.phone
    } or WhatsApp for quick responses. Email: ${
      client.email || "Available on request"
    }`,
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hi! I'm the ${client.name} assistant. How can I help you today?`,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickReply = (reply: (typeof quickReplies)[0]) => {
    setMessages((prev) => [
      ...prev,
      { text: reply.text, isBot: false, timestamp: new Date() },
      { text: reply.response, isBot: true, timestamp: new Date() },
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [
      ...prev,
      { text: userMessage, isBot: false, timestamp: new Date() },
    ]);
    setInputValue("");

    // Simple bot response logic
    setTimeout(() => {
      let botResponse =
        "Thank you for your message! For specific inquiries, please call us at " +
        client.phone +
        " or use WhatsApp for faster response.";

      if (
        userMessage.toLowerCase().includes("book") ||
        userMessage.toLowerCase().includes("appointment")
      ) {
        botResponse = quickReplies[0].response;
      } else if (
        userMessage.toLowerCase().includes("service") ||
        userMessage.toLowerCase().includes("treatment")
      ) {
        botResponse = quickReplies[1].response;
      } else if (
        userMessage.toLowerCase().includes("location") ||
        userMessage.toLowerCase().includes("address") ||
        userMessage.toLowerCase().includes("hours")
      ) {
        botResponse = quickReplies[2].response;
      } else if (
        userMessage.toLowerCase().includes("contact") ||
        userMessage.toLowerCase().includes("phone") ||
        userMessage.toLowerCase().includes("call")
      ) {
        botResponse = quickReplies[3].response;
      }

      setMessages((prev) => [
        ...prev,
        { text: botResponse, isBot: true, timestamp: new Date() },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat"
        >
          {/* Main button */}
          <div
            className="relative w-16 h-16 rounded-full
                          bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900
                          shadow-2xl shadow-navy-900/50
                          flex items-center justify-center
                          hover:scale-110 transition-all duration-300
                          border-2 border-gold-400/30 hover:border-gold-400/60"
          >
            {/* Icon */}
            <svg
              className="w-8 h-8 text-gold-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full border-2 border-gold-400
                           animate-ping opacity-75"
            />
            {/* Online indicator */}
            <span
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full
                           border-2 border-white shadow-lg flex items-center justify-center"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </span>
          </div>
          {/* Tooltip */}
          <div
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-navy-900 text-white
                          text-sm font-medium rounded-lg shadow-xl whitespace-nowrap
                          opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            Chat with us!
            <div
              className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4
                            border-transparent border-t-navy-900"
            />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh]
                        bg-white rounded-2xl shadow-2xl flex flex-col
                        border border-navy-100 overflow-hidden
                        animate-fade-up"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Enamel -2 Assistant
                </h3>
                <p className="text-xs text-white/60">
                  Online • Replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                    msg.isBot
                      ? "bg-white text-navy-900 shadow-sm border border-navy-100"
                      : "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <span
                    className={`text-[10px] mt-1 block ${
                      msg.isBot ? "text-navy-400" : "text-navy-700"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-3 bg-white border-t border-navy-100">
              <p className="text-xs text-navy-500 mb-2 font-medium">
                Quick options:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1.5 rounded-full
                               bg-navy-50 text-navy-700 border border-navy-200
                               hover:bg-navy-100 hover:border-navy-300
                               transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-navy-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-navy-200
                           focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20
                           text-sm text-navy-900 placeholder:text-navy-400"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500
                           text-navy-900 font-medium hover:shadow-lg hover:shadow-gold-500/30
                           transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
