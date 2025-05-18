export async function generateItinerary(prompt: string): Promise<string> {
  const response = await fetch("/api/generateItinerary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch itinerary from server");
  }

  const data = await response.json();
  return data.text;
}