import { GoogleGenAI } from '@google/genai';
const model = 'gemini-2.0-flash';
const config = {
    responseMimeType: 'application/json',
    temperature: 0.5,
    maxOutputTokens: 2000,
    topP: 0.8,
    topK: 40,
};

export async function generateItinerary(prompt: string) {
  try {
    console.log("Generating itinerary with prompt:", prompt);

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],

    });

    let fullResponse = "";
    for await (const chunk of response) {
      console.log("Received chunk:", chunk.text);
      fullResponse += chunk.text || "";
    }

    console.log("Full AI response:", fullResponse);
    return fullResponse;
  } catch (error) {
    console.error("Error in generateItinerary function:", error);
    throw new Error("Error generating itinerary");
  }
}
