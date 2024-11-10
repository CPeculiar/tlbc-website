import React from 'react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "2019 Kids Church Camp",
      date: "September 28",
      day: "28",
      month: "SEP",
      time: "8:00 PM — 5:30 PM",
      location: "1600 Amphitheatre Parkway, Mt. View",
      description: "Et consequatur nihil odio odit voluptatem qui. Dolores doloribus cupiditate totam esse dolores quod. Magni aut incidunt fugiat labore est ut non ipsam nihil.",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Prayer Meeting",
      date: "July 27",
      day: "27",
      month: "JUL",
      time: "6:00 PM — 8:30 PM",
      location: "1600 Amphitheatre Parkway, Mt. View",
      description: "Laborum distinctio minima doloribus reiciendis aut aliquid. Deleniti est adipisci ut quo ducimus eum ratione voluptas.",
      image: "/api/placeholder/800/400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">LIST</button>
          <button className="text-gray-500 hover:text-gray-700">MONTH</button>
        </div>
      </div>

      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="md:w-1/3 relative">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-6">
              <div className="flex items-start gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{event.day}</div>
                  <div className="text-sm font-medium text-gray-500">{event.month}</div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="text-gray-600 mb-2">
                    {event.location}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {event.time}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                    View Event Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;