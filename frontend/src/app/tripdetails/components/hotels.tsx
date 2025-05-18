import { useState } from 'react';
import { MapPin, Star, Info, DollarSign, Calendar } from 'lucide-react';
import Link from 'next/link';

interface TripData {
  accommodationOptions: {
    hotelName: string;
    hotelAddress: string;
    hotelDescription: string;
    pricePerNight: string;
  }[];
  budget: string;
  currency: string;
  diningOptions: any[];
  duration: string;
  itinerary: any[];
  travelers: string;
  tripName: string;
  tripType: string;
}

interface Trip {
  tripData: TripData[];
  userSelection: any;
}

interface hotelProps {
  trip: Trip | null;
}

export default function Hotel({ trip }: hotelProps) {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(0);
  
  if (!trip) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-gray-300 mb-4"></div>
        <div className="h-4 w-48 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  const accommodations = trip?.tripData?.[0]?.accommodationOptions || [];
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Accommodation Options</h2>
        <p className="text-gray-600">
          Select from our curated list of premium accommodations for your trip
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-4 h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Available Hotels</h3>
          <div className="space-y-3">
            {accommodations.map((hotel, index) => (
              <div 
                key={index}
                onClick={() => setSelectedHotel(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedHotel === index 
                    ? 'bg-blue-50 border border-blue-300 shadow-sm' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800">{hotel.hotelName}</div>
                  <div className="text-sm font-semibold text-blue-600">{hotel.pricePerNight}</div>
                </div>
                <div className="text-sm text-gray-500 flex items-center mt-1">
                  <MapPin size={14} className="mr-1 text-gray-400" />
                  {hotel.hotelAddress.split(',')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {selectedHotel !== null && accommodations[selectedHotel] && (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Link href = {'https://www.google.com/maps/search/?api=1&query=' + accommodations[selectedHotel].hotelName +','+ accommodations[selectedHotel].hotelAddress} target='_blank'>
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="/bg2.jpg" 
                  alt={accommodations[selectedHotel].hotelName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white py-2 px-4 rounded-br-lg">
                  Featured
                </div>
              </div>
              </Link>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{accommodations[selectedHotel].hotelName}</h3>
                    <div className="flex items-center mt-1 text-gray-600">
                      <MapPin size={16} className="mr-1 text-gray-500" />
                      <span>{accommodations[selectedHotel].hotelAddress}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xl font-bold text-blue-600 flex justify-center items-center">
                    <DollarSign size={14} className="mr-1" />{accommodations[selectedHotel].pricePerNight}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                
                {/* <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                    <Star size={14} className="mr-1 text-yellow-500" /> 4.8/5
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                    <Calendar size={14} className="mr-1" /> Free cancellation
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                    <DollarSign size={14} className="mr-1" /> Best price guarantee
                  </span>
                </div> */}
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Info size={18} className="mr-2 text-gray-500" />
                    About this property
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {accommodations[selectedHotel].hotelDescription}
                  </p>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition-colors">
                  Select This Hotel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}