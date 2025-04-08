import React, { useMemo } from 'react';

function SingleEvents() {

 // Function to check if an event is upcoming
//  const isUpcomingEvent = (dateString) => {
//     const eventDate = new Date(dateString);
//     const today = new Date();
//     return eventDate >= today;
//   };
const isUpcomingEvent = (event) => {
  const eventDate = new Date(event.startDate || event.date);
  const today = new Date();
  return eventDate >= today;
};


  // Events data with their details
  const events = [
    {
      title: "Good Friday Praise Night",
      date: "2025-04-25T08:00:00",
      time: "09:00 PM",
      location: "All TLBC Int'l church expressions",
      description: "We will be having a ministry-wide Praise Night with our dear Man of God Reverend Elochukwu Udegbunam.",
      image: "/Good-friday.jpg"
    },
    {
      title: "Pastors and Leaders Conference 2025",
      startDate: "2025-05-07T08:00:00",
      endDate: "2025-05-11T23:59:59",
      time: "5PM",
      location: "Kingdom City Prayer Camp, Awka",
      description: "Ministry-wide camping meeting with our dear Man of God, Reverend Elochukwu Udegbunam.",
      image: "/PLC-2025.jpg"
    },
  ];

  // Filter and sort upcoming events
  const upcomingEvents = useMemo(() => {
    return events
    .filter(event => isUpcomingEvent(event))
    .sort((a, b) => new Date(a.startDate || a.date) - new Date(b.startDate || b.date));    
  }, []);


  return (
    <div>

{/* page header */}

<section class="page-header page-header--events">

<div class="gradient-overlay"></div>
<div class="row page-header__content">
    <div class="column">
        <h1>Upcoming Events</h1>
    </div>
</div>

</section>


{/* page content */}

<section class="page-content">

<div class="row">
    <div class="column">

  {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <div key={index}>
                  <div className="media-wrap flex items-center justify-center mt-4">
                    <img 
                      src={event.image} 
                      className="w-full h-auto max-w-full object-cover"
                      alt={event.title}
                      loading="lazy"
                    />
                  </div>
                  <div className={`event-content ${event.title.replace(/\s+/g, '')}`}>
                    <div className="event-title">
                      <h2 className="display-1">{event.title}</h2>
                    </div>

                    <p>{event.description}</p>

                    <p>Below are the program details:</p>

                    <ul className="event-meta">
                    <li><strong>Date</strong> {
                    (() => {
                      const start = new Date(event.startDate || event.date);
                      const end = event.endDate ? new Date(event.endDate) : null;

                      if (end) {
                        const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();

                        return sameMonth
                          ? `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}–${end.getDate()}, ${end.getFullYear()}`
                          : `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
                      } else {
                        return start.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        });
                      }
                    })()
                  }</li>
                      <li><strong>Time</strong> {event.time}</li>
                      <li><strong>Location</strong> {event.location}</li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events text-center py-10">
                <h2 className="text-2xl font-bold">No Upcoming Events</h2>
                <p>Please check back later for future events.</p>
              </div>
            )}
          </div>
        </div>

</section> 
    
    </div>
  )
}

export default SingleEvents