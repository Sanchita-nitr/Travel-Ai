"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { db } from "../service/firebaseConfig";
import { AI_PROMPT, budgetOptions, SelectTravelersList } from "./options";

export default function TripPlannerWrapper() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <TripPlanner />
    </GoogleOAuthProvider>
  );
}

// Rename the original TripPlanner function to avoid conflicts
function TripPlanner() {
  const [formData, setFormData] = useState<{
    destination?: string;
    days?: string;
    budget?: string;
    travelers?: string;
    [key: string]: string | undefined;
  }>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("Itinerary updated:", itinerary);
  }, [itinerary]);

  const popularDestinations = [
    "Paris, France",
    "Rome, Italy",
    "Barcelona, Spain",
    "London, UK",
    "Amsterdam, Netherlands",
    "Venice, Italy",
    "Berlin, Germany",
    "Prague, Czech Republic",
    "Vienna, Austria",
    "Zurich, Switzerland",
    "Dubrovnik, Croatia",
    "Budapest, Hungary",
    "Athens, Greece",
    "Lisbon, Portugal",
    "Edinburgh, Scotland",
    "Oslo, Norway",
    "Reykjavik, Iceland",
    "Brussels, Belgium",
    "Munich, Germany",
    "Copenhagen, Denmark",
    "Tokyo, Japan",
    "Kyoto, Japan",
    "Seoul, South Korea",
    "Bangkok, Thailand",
    "Bali, Indonesia",
    "Singapore",
    "Kuala Lumpur, Malaysia",
    "Hong Kong",
    "Dubai, UAE",
    "Abu Dhabi, UAE",
    "Shanghai, China",
    "Beijing, China",
    "Ho Chi Minh City, Vietnam",
    "Taipei, Taiwan",
    "Doha, Qatar",
    "Tbilisi, Georgia",
    "Almaty, Kazakhstan",
    "Baku, Azerbaijan",
    "New York, USA",
    "Los Angeles, USA",
    "San Francisco, USA",
    "Chicago, USA",
    "Miami, USA",
    "Las Vegas, USA",
    "Toronto, Canada",
    "Vancouver, Canada",
    "Montreal, Canada",
    "Mexico City, Mexico",
    "Cancun, Mexico",
    "Rio de Janeiro, Brazil",
    "Buenos Aires, Argentina",
    "Lima, Peru",
    "Santiago, Chile",
    "Bogotá, Colombia",
    "Cusco, Peru",
    "Quito, Ecuador",
    "Cairo, Egypt",
    "Cape Town, South Africa",
    "Marrakech, Morocco",
    "Nairobi, Kenya",
    "Zanzibar, Tanzania",
    "Victoria Falls, Zimbabwe/Zambia",
    "Johannesburg, South Africa",
    "Sydney, Australia",
    "Melbourne, Australia",
    "Brisbane, Australia",
    "Perth, Australia",
    "Auckland, New Zealand",
    "Queenstown, New Zealand",
    "Fiji Islands",
    "Bora Bora, French Polynesia",
    "Mumbai, Maharashtra",
    "Delhi (New Delhi)",
    "Bangalore, Karnataka",
    "Hyderabad, Telangana",
    "Chennai, Tamil Nadu",
    "Pune, Maharashtra",
    "Ahmedabad, Gujarat",
    "Gurugram, Haryana",
    "Chandigarh",
    "Noida, Uttar Pradesh",
    "Kochi, Kerala",
    "Agra, Uttar Pradesh",
    "Jaipur, Rajasthan",
    "Udaipur, Rajasthan",
    "Jodhpur, Rajasthan",
    "Amritsar, Punjab",
    "Rishikesh, Uttarakhand",
    "Haridwar, Uttarakhand",
    "Varanasi, Uttar Pradesh",
    "Khajuraho, Madhya Pradesh",
    "Hampi, Karnataka",
    "Mysore, Karnataka",
    "Madurai, Tamil Nadu",
    "Bhubaneswar, Odisha",
    "Sanchi, Madhya Pradesh",
    "Shimla, Himachal Pradesh",
    "Manali, Himachal Pradesh",
    "Mussoorie, Uttarakhand",
    "Nainital, Uttarakhand",
    "Darjeeling, West Bengal",
    "Gangtok, Sikkim",
    "Munnar, Kerala",
    "Ooty, Tamil Nadu",
    "Coorg, Karnataka",
    "Mount Abu, Rajasthan",
    "Goa, India",
    "Andaman & Nicobar Islands",
    "Lakshadweep Islands",
    "Pondicherry",
    "Gokarna, Karnataka",
    "Kovalam, Kerala",
    "Varkala, Kerala",
    "Alibaug, Maharashtra",
    "Daman & Diu",
    "Kedarnath, Uttarakhand",
    "Badrinath, Uttarakhand",
    "Tirupati, Andhra Pradesh",
    "Shirdi, Maharashtra",
    "Vaishno Devi, Jammu & Kashmir",
    "Rameswaram, Tamil Nadu",
    "Kanyakumari, Tamil Nadu",
    "Puri, Odisha",
  ];

  const filteredDestinations = popularDestinations.filter((destination) =>
    destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDestinationSelect = (destination: string) => {
    setFormData((prev) => ({ ...prev, destination })); // Keep previous data
    setSearchTerm(destination);
    setShowSuggestions(false);
  };

  const onGenerateItinerary = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    const validations = [
      {
        condition: !formData.destination,
        message: "Please select a destination.",
      },
      {
        condition: !formData.days,
        message: "Please enter the number of days.",
      },
      {
        condition: !formData.budget,
        message: "Please select a budget option.",
      },
      {
        condition: !formData.travelers,
        message: "Please select a travel companion option.",
      },
    ];

    for (const { condition, message } of validations) {
      if (condition) {
        alert(message);
        return;
      }
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{destination}",
      formData.destination || ""
    )
      .replace("{travelers}", formData.travelers || "")
      .replace("{budget}", formData.budget || "")
      .replace("{days}", formData.days || "");

    try {
      const response = await fetch("/api/generateItinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: FINAL_PROMPT }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate itinerary");
      }

      const data = await response.json();
      setItinerary(data.result); // Store the itinerary result in the state
      saveAiTrip(data.result); // Save the itinerary to Firestore
      setLoading(false);
    } catch (error) {
      console.error("Error generating itinerary:", error);
      alert("Failed to generate itinerary");
    }
  };

  const saveAiTrip = async (TripData: string) => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const docId = Date.now().toString();

      await setDoc(doc(db, "AITrips", docId), {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        userEmail: user?.email,
        id: docId,
      });

      setLoading(false);
      router.push(`/tripdetails/${docId}`);
      console.log("Trip saved to Firestore!");
    } catch (err) {
      console.error("Error saving trip to Firestore:", err);
      alert("Failed to save trip to database.");
    }
  };

  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
      GetUserProfile(tokenInfo);
      localStorage.setItem("user", JSON.stringify(tokenInfo));
    },
    onError: (error) => console.error("Login failed:", error),
  });

  const GetUserProfile = (tokenInfo: { access_token: string }) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("User profile:", response);
        localStorage.setItem("user", JSON.stringify(response.data));
        onGenerateItinerary();
        setOpenDialog(false);
      })
      .catch((err) => console.error("Failed to fetch user profile:", err));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Ensure this component is client-side only */}
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold">AI Trip Planner</h1>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              {/* Destination Input */}

              <div className="block text-sm font-medium text-gray-700">
                Where would you like to go?
                <GooglePlacesAutocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                />
                {/* <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter destination"
                /> */}
              </div>

              <div className="relative">
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Where would you like to go?
                </label>
                <input
                  type="text"
                  id="destination"
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter destination"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                    if (e.target.value !== formData.destination) {
                      setFormData((prev) => ({
                        ...prev,
                        destination: e.target.value,
                      })); // Keep previous data
                    }
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                {showSuggestions && searchTerm && (
                  <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto">
                    {filteredDestinations.length > 0 ? (
                      filteredDestinations.map((destination, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleDestinationSelect(destination)}
                        >
                          {destination}
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-gray-500">
                        No matching destinations found. You can still use your
                        custom input.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Number of Days */}
              <div>
                <label
                  htmlFor="days"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How many days are you planning for the trip?
                </label>
                <input
                  type="number"
                  id="days"
                  min="1"
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter number of days"
                  onChange={(e) => handleInputChange("days", e.target.value)}
                />
              </div>

              {/* Budget Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What is your budget?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {budgetOptions.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 border cursor-pointer rounded-md transition-all ${
                        formData.budget === item.title
                          ? "border-indigo-600 bg-indigo-50"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleInputChange("budget", item.title)}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Who do you plan on traveling with?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {SelectTravelersList.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 border cursor-pointer rounded-md transition-all ${
                        formData.travelers === item.title
                          ? "border-indigo-600 bg-indigo-50"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleInputChange("travelers", item.title)}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={onGenerateItinerary}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full transition"
                disabled={loading}
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "Generate Itinerary"
                )}
              </button>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Travel AI</DialogTitle>

                    {/* Avoid nesting <div> inside DialogDescription directly */}
                    <DialogDescription>
                      Sign in to the App with Google authentication securely
                    </DialogDescription>

                    <div className="mt-2 space-y-2">
                      <div className="font-bold text-lg">
                        Sign In with Google
                      </div>

                      <button
                        type="button"
                        onClick={() => login()}
                        className="bg-black text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2"
                      >
                        <FcGoogle />
                        Sign In
                      </button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Right Section - Placeholder for response or visuals in future */}
          <div className="lg:col-span-2">
            Response display area
            {itinerary && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-lg font-bold mb-4">Generated Itinerary</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                  {itinerary}
                </pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
