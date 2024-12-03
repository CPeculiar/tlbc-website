import React, { useMemo } from 'react';

function SingleEvents() {

 // Function to check if an event is upcoming
 const isUpcomingEvent = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  // Events data with their details
  const events = [
    {
      title: "Presidential Appreciation Service",
      date: "2024-12-08T08:00:00",
      time: "8:00 AM — 10:30 AM",
      location: "All TLBC Int'l church expressions",
      description: "We will be celebrating the President of our Ministry, Reverend Elochukwu Udegbunam. It will be a ministry-wide appreciation service for our dear Man of God.",
      image: "/PresidentialApp.jpg"
    },
    {
      title: "Thanksgiving Service",
      date: "2024-12-15T08:00:00",
      time: "8:00 AM — 10:30 AM",
      location: "All TLBC Int'l church expressions",
      description: "Ministry-wide Thanksgiving service for the year 2024.",
      image: "/Thanksgiving.jpg"
    },
    {
      title: "Parah 2024",
      date: "2024-12-20T14:00:00",
      time: "9:00 PM",
      location: "The Lord's Brethren Place, Awka, Anambra State",
      description: "Ministry-wide Workers Party for the year 2024.",
      image: "/Parah.jpg"
    },
    {
      title: "New Year's Eve Service",
      date: "2024-12-31T21:00:00",
      time: "9:00 PM",
      location: "The Lord's Brethren Place, Awka, Anambra State",
      description: "Ministry-wide New Year's Eve Service for the year 2024.",
      image: "/NewYearEve.jpg"
    }
  ];

  // Filter and sort upcoming events
  const upcomingEvents = useMemo(() => {
    return events
      .filter(event => isUpcomingEvent(event.date))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
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
                      <li><strong>Date</strong> {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</li>
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