"use client";

import { useState } from "react";
import { SendHorizonal, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function AIBuddyPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "👋 Hello! I'm SCE AI Buddy.\n\nAsk me anything about Saranathan College of Engineering.",
    },
  ]);

  async function sendMessage() {
    if (!question.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "❌ Something went wrong. Please try again.",
        },
      ]);
    }

    setQuestion("");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-4xl mx-auto py-10 px-5">

        <h1 className="text-5xl font-bold text-center mb-3">
          🤖 SCE AI Buddy
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Powered by Google Gemini
        </p>

        <div className="bg-slate-900 rounded-3xl p-6 h-[550px] overflow-y-auto space-y-5">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">

                  {msg.role === "assistant" ? (
                    <Bot size={18} />
                  ) : (
                    <User size={18} />
                  )}

                  <span className="font-semibold">
                    {msg.role === "assistant"
                      ? "AI Buddy"
                      : "You"}
                  </span>

                </div>

                <p className="whitespace-pre-wrap">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="flex mt-6 gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything about SCE..."
            className="flex-1 rounded-xl bg-slate-800 px-5 py-4 outline-none"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            <SendHorizonal />
          </button>

        </div>

      </div>

    </main>
  );
}