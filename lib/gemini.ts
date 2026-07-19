import { GoogleGenAI } from "@google/genai";

console.log(
  "API Key Loaded:",
  process.env.GEMINI_API_KEY ? "YES" : "NO"
);

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});