import React, { useEffect } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { GetPlaceDetails } from '../../service/GlobalApi';

interface Trip {
  userSelection: any;
}

interface infoSectionProps {
  trip: Trip | null;
}
const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxWidthPx=400&maxHeightPx=400&key='+process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;

export default function InfoSection({ trip }: infoSectionProps) {
  if (!trip) return <p>Loading trip info...</p>;
const [photoUrl, setPhotoUrl] = React.useState<string | null>(null);  

 const GetPlacePhoto =async()=>{
  const textQuery = trip?.userSelection?.destination;
  const result = await GetPlaceDetails(textQuery).then(resp=>{
    console.log(resp.data)

    const photoRef = resp.data.places[0].photos[0].photoReference;
    const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoRef);
    setPhotoUrl(photoUrl);
  })
 }
 useEffect(()=>{
  trip&&GetPlacePhoto();
 },[trip])

  return (
    <div>
      <h2>Information Trip</h2>
      <img src={photoUrl || undefined} alt="photo" />
      <div className=' flex justify-center font-extrabold text-5xl font-serif'>
        <h2>{trip?.userSelection?.destination}</h2>
      </div>
      <div className=''>  <RiSendPlaneFill /></div>
      <div className='flex gap-5 font-medium text-2xl ml-2 mt-5'>
        <h1 className='border bg-gray-200 px-3.5 rounded-2xl'>🗓️{trip?.userSelection?.days}</h1>
        <h1 className='border bg-gray-200 px-3.5 rounded-2xl'>💰{trip?.userSelection?.budget}</h1>
        <h1 className='border bg-gray-200 px-3.5 rounded-2xl'>🎊{trip?.userSelection?.travelers}</h1>
      
      </div>
     
    </div>
  );
}
