import { generateItinerary } from '@/app/lib/generateItinerary';
import { NextResponse } from 'next/server';  // Use NextResponse to send the response


export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt);

    if (!prompt) {
      console.log("Prompt is missing");
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const itinerary = await generateItinerary(prompt);
    console.log("Generated itinerary:", itinerary);

    return NextResponse.json({ result: itinerary }, { status: 200 });
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return NextResponse.json({ error: "Failed to generate itinerary" }, { status: 500 });
  }
}
