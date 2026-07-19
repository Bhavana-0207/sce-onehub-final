"use client";
import { faqs } from "@/data/faqs";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Send,
  Mic,
  Paperclip,
  Sparkles,
  GraduationCap,
  MapPinned,
  CalendarDays,
  Briefcase,
  LoaderCircle,
} from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const suggestions = [
  {
    title: "Today's Timetable",
    icon: <CalendarDays size={20} />,
    prompt: "Show today's timetable",
  },
  {
    title: "Find Faculty",
    icon: <GraduationCap size={20} />,
    prompt: "Who is the HOD of CSE?",
  },
  {
    title: "Campus Navigation",
    icon: <MapPinned size={20} />,
    prompt: "Where is the CSE Department?",
  },
  {
    title: "Placement Statistics",
    icon: <Briefcase size={20} />,
    prompt: "Show placement statistics",
  },
];

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hello 👋 I'm OneHub AI. Ask me anything about Saranathan College of Engineering.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage(customMessage?: string) {
  const text = (customMessage ?? message).trim();

  if (!text) return;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text,
    },
  ]);

  setMessage("");
  setLoading(true);

  // Simulate Gemini thinking
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const question = text.toLowerCase();

  const match = faqs.find(
    (faq) =>
      question.includes(faq.question.toLowerCase()) ||
      faq.question.toLowerCase().includes(question)
  );

  const reply = match
    ? match.answer
    : `I couldn't find an exact answer for "${text}".

Try asking about:

• Faculty
• Timetable
• GPA
• Bus Routes
• Placements
• Events
• Campus Navigation
• Complaint Portal`;

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: reply,
    },
  ]);

  setLoading(false);
}

  return (
        <section className="min-h-screen bg-[#020617] text-white">

      {/* Header */}

      <div className="border-b border-white/10 bg-[#08101f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <Bot size={30} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                OneHub AI
              </h1>

              <p className="text-gray-400">
                Smart Campus Assistant
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 rounded-full bg-cyan-500/20 px-5 py-2 text-cyan-300">
            <Sparkles size={18} />
            Powered by Gemini
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl"
        >

          {/* Welcome */}

          <div className="flex items-center gap-5 mb-8">

            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <Bot size={30} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Hello 👋
              </h2>

              <p className="text-gray-400 mt-2">
                Ask me anything about Saranathan College of Engineering.
              </p>
            </div>

          </div>

          {/* Chat Messages */}

          <div className="space-y-5 max-h-[450px] overflow-y-auto pr-2 mb-8">

            {messages.map((msg, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] rounded-3xl px-5 py-4 whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "bg-white/10 border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>

              </motion.div>

            ))}

            {loading && (

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex justify-start"
  >

    <div className="rounded-3xl border border-cyan-500/20 bg-white/10 backdrop-blur-xl px-5 py-4 flex items-center gap-3">

      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

        <Bot size={18} />

      </div>

      <div>

        <p className="font-medium text-cyan-300">
          OneHub AI
        </p>

        <div className="flex items-center gap-1 mt-1">

          <span className="text-gray-300 text-sm">
            Typing
          </span>

          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          >
            ●
          </motion.span>

          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.2,
            }}
          >
            ●
          </motion.span>

          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.4,
            }}
          >
            ●
          </motion.span>

        </div>

      </div>

    </div>

  </motion.div>

)}

            <div ref={bottomRef} />

          </div>
                    {/* Suggested Prompts */}

          <div className="grid md:grid-cols-2 gap-5 mb-8">

            {suggestions.map((item) => (

              <motion.button
                key={item.title}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => sendMessage(item.prompt)}
                disabled={loading}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-left hover:border-cyan-500/50 transition disabled:opacity-50"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      Click to ask OneHub AI
                    </p>

                  </div>

                </div>

              </motion.button>

            ))}

          </div>
                    {/* Chat Input */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">

            <div className="flex items-center gap-3">

              <Paperclip
                size={22}
                className="text-gray-400 ml-2 cursor-pointer hover:text-cyan-400 transition"
              />

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask OneHub AI anything..."
                disabled={loading}
                className="flex-1 bg-transparent py-5 outline-none text-lg placeholder:text-gray-500 disabled:opacity-60"
              />

              <button
                type="button"
                className="rounded-xl p-3 hover:bg-white/10 transition"
              >
                <Mic size={22} />
              </button>

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={loading || !message.trim()}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 transition hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? (
                  <LoaderCircle
                    size={20}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={20} />
                )}
              </button>

            </div>

          </div>
                    {/* Footer */}

          <p className="mt-8 text-center text-sm text-gray-500">
            OneHub AI can answer questions about departments, faculty,
            campus events, placements and campus navigation.
          </p>

        </motion.div>
      </div>

    </section>
  );
}