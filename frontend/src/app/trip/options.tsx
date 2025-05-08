export const budgetOptions = [
  { id: 1, title: "Economy", desc: "Best value for money", icon: "💰" },
  { id: 2, title: "Standard", desc: "Balance of comfort and cost", icon: "💎" },
  {
    id: 3,
    title: "Premium",
    desc: "Enhanced comfort and amenities",
    icon: "✨",
  },
  {
    id: 4,
    title: "Luxury",
    desc: "Premium experience with exclusive services",
    icon: "👑",
  },
];


export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "💁🏻‍♀️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers",
    icon: "👨‍👩‍👧",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Group",
    desc: "A larger group seeking experiences together",
    icon: "👯",
    people: "6+ People",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for a trip to {destination} for {travelers} travelers with a budget of {budget}. The trip should include hotel options with hotel descriptions and name , Hotel address , price , image url, geo coordinates ,ticket pricing,  activities, accommodations, and dining options. The trip should be focused on {tripType} and should last for {days}. Please provide a detailed itinerary with place name, place details, place img url, geo coordinates,time travel  with recommendations for each day of the trip.";
