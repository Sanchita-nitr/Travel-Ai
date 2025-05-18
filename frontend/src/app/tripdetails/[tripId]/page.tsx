"use client";

import { db } from "@/app/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Hotel from "../components/hotels";
import InfoSection from "../components/infoSection";
import PlacesToVisit from "../components/placesToVisit";

interface Trip {
  userSelection: string;
  tripData: any;
}

export default function TripDetailsPage() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    if (typeof tripId !== "string") {
      console.error("Invalid tripId type");
      toast.error("Invalid trip ID");
      return;
    }

    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setTrip(docSnap.data() as Trip); // 👈 Assert type here
    } else {
      console.log("No such document");
      toast.error("No such document");
    }
  };

  return (
    <div>
      <h1>Trip Details Page</h1>
      <p>tripId: {tripId}</p>

      <div>
        <InfoSection trip={trip} />
        <Hotel trip={trip} />
        <PlacesToVisit trip={trip} />
        {/* Add Recommendations, Daily Plan, etc. */}
      </div>
    </div>
  );
}
