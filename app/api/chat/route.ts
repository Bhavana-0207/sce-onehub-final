import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
  console.log("✅ API route called");

  try {
    const { message } = await req.json();

    console.log("Question:", message);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });

    console.log("Gemini Response:", response.text);

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error: any) {
    console.error("FULL ERROR:", error);
    console.error("Message:", error?.message);
    console.error("Status:", error?.status);
    console.error("Details:", error?.details);

    return NextResponse.json(
      {
        reply: "Hi, How can i help you?",
      },
      { status: 500 }
    );
  }
}