import React, { useState } from 'react';
import { MapPin, Clock, Calendar, ChevronRight, ChevronDown, Star, Navigation } from 'lucide-react';
import Link from 'next/link';
interface Activity {
  placeName: string;
  imageUrl: string;
  placeDetails: string;
  timeTravel: string;
  recommendations: string;
}

interface DailyItinerary {
  activities: Activity[];
  day: number;
  theme: string;
}

interface TripData {
  dailyItinerary: DailyItinerary[];
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

interface PlacesToVisitProps {
  trip: Trip | null;
}

export default function PlacesToVisit({ trip }: PlacesToVisitProps) {
    const [expandedDays, setExpandedDays] = useState<number[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<{day: number, activity: number} | null>({day: 0, activity: 0});
  
  if (!trip) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-gray-300 mb-4"></div>
        <div className="h-4 w-48 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  // Function to toggle day expansion
  const toggleDay = (dayIndex: number) => {
    setExpandedDays((prev) =>
      prev.includes(dayIndex)
        ? prev.filter((day) => day !== dayIndex)  // Collapse if already open
        : [...prev, dayIndex]                     // Expand if not open
    );
  };
  

  // Function to select an activity
  const selectActivity = (dayIndex: number, activityIndex: number) => {
    setSelectedActivity({day: dayIndex, activity: activityIndex});
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Itinerary</h2>
        <p className="text-gray-600">
          Explore the exciting places and activities planned for your trip
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Navigation sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Trip Overview</h3>
            
            {trip.tripData[0]?.dailyItinerary.map((day, dayIndex) => (
              <div key={dayIndex} className="mb-2">
                <div 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                    expandedDays.includes(dayIndex)
                    ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleDay(dayIndex)}
                >
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-blue-500" size={18} />
                    <span className="font-medium">Day {day.day}</span>
                  </div>
                  {expandedDays.includes(dayIndex)? 
                    <ChevronDown size={18} /> : 
                    <ChevronRight size={18} />
                  }
                </div>
                
                {expandedDays.includes(dayIndex)&& (
                  <div className="ml-7 mt-1 space-y-1">
                    {day.activities.map((activity, activityIndex) => (
                      <div 
                        key={activityIndex}
                        onClick={() => selectActivity(dayIndex, activityIndex)}
                        className={`p-2 text-sm rounded-md cursor-pointer ${
                          selectedActivity?.day === dayIndex && selectedActivity?.activity === activityIndex
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 flex-shrink-0" />
                          <span className="truncate">{activity.placeName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Main content area */}
        <div className="lg:w-2/3">
          {trip.tripData.map((data, dataIndex) => (
            <div key={dataIndex}>
              {data.dailyItinerary.map((day, dayIndex) => (
               <div key={dayIndex} className={`mb-8 ${expandedDays.length > 0 && !expandedDays.includes(dayIndex) ? 'hidden lg:block' : ''}`}>

                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{day.theme}</h3>
                      <p className="text-gray-500 text-sm">{day.activities.length} places to visit</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {day.activities.map((activity, activityIndex) => {
                      const isSelected = selectedActivity?.day === dayIndex && selectedActivity?.activity === activityIndex;
                      
                      return (
                        <div 
                          key={activityIndex} 
                          className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all ${
                            isSelected ? 'ring-2 ring-blue-400' : ''
                          }`}
                          onClick={() => selectActivity(dayIndex, activityIndex)}
                        >
                          <div className="flex flex-col md:flex-row">
                            <Link href = {'https://www.google.com/maps/search/?api=1&query=' + activity.placeName} target='_blank'>
                            <div className="md:w-2/5 h-48 relative">
                              <img
                                src='/bg2.jpg'
                                alt={activity.placeName}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-1 px-3 text-sm font-medium rounded-br-lg">
                                Featured
                              </div>
                            </div>
                            </Link>
                            
                            
                            <div className="md:w-3/5 p-5">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold text-gray-800">{activity.placeName}</h4>
                                <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-sm">
                                  <Clock size={14} className="mr-1 text-gray-500" />
                                  <span className="text-gray-600">{activity.timeTravel}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                {activity.placeDetails}
                              </p>
                              
                              {/* <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                                  <Star size={12} className="mr-1" /> Must visit
                                </span>
                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs flex items-center">
                                  <Navigation size={12} className="mr-1" /> Easy to reach
                                </span>
                              </div> */}
                              
                              {isSelected && (
                                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <p className="text-sm text-gray-700 italic font-medium">
                                    "{activity.recommendations}"
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}