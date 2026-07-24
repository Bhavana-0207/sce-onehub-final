import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import scePrompt from "@/data/sce-system-prompt.json";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { reply: "Please type a question so I can help." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        {
          reply:
            "AI Buddy isn't configured yet — the Gemini API key is missing. Please contact the site admin.",
        },
        { status: 500 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: message,
      config: {
        systemInstruction: scePrompt.systemPrompt,
      },
    });

    const reply =
      response.text?.trim() ||
      "Sorry, I couldn't generate a response for that. Could you rephrase your question?";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error?.status, error?.message ?? error);

    if (error?.status === 429) {
      return NextResponse.json(
        {
          reply:
            "OneHub AI has hit its free-tier usage limit for right now. Please try again in a little while.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        reply:
          "Sorry, OneHub AI is having trouble reaching Gemini right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}