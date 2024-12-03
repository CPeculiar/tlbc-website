import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../components/Hero";
import heroIMG from "../assets/images/wordsession.jpg";
import styleIMG from "../assets/images/TLBC-Slider2.png";
import NewsletterSubscription from "../components/NewsletterSubscription";
import Footer from "../components/Footer";


const Homepage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/event');
      };

  const events = [

    {
      id: 1,
      title: "Presidential Appreciation Service",
      date: "Sunday, December 8, 2024",
      time: "8:00 AM — 10:30 AM",
      location: "All TLBC Int'l church expressions",
      description:  "Ministry-wide appreciation service for our dear Man of God, Reverend Elochukwu Udegbunam.",
      image: "/PresidentialApp.jpg",
    },
    {
        id: 2,
        title: "Thanksgiving Service",
        date: "Sunday, December 15, 2024",
        time: "8:00 AM — 10:30 AM",
        location: "All TLBC Int'l church expressions",
        description: "Ministry-wide Thanksgiving service for the year 2024.",
        image: "/Thanksgiving.jpg",
      },
      {
        id: 3,
        title: "Parah 2024",
        date: "Friday, December 20, 2024",
        time: "9:00 PM",
        location: "The Lord’s Brethren Place, Awka",
        description:  "Ministry-wide Workers Party for the year 2024.",
        image: "/Parah.jpg",
      },
      {
        id: 4,
        title: "New Year's Eve Service",
        date: "Tuesday, December 31, 2024",
        time: "9:00 PM",
        location: "The Lord’s Brethren Place, Awka",
        description: "Ministry-wide New Year Eve Service for the year 2024.",
        image: "/NewYearEve.jpg",
      },
  ];

         // {
      //   id: 4,
      //   title: "Christmas Eve's Service",
      //   date: "Tuesday, December 24, 2024",
      //   time: "5:00 PM — 7:30 PM",
      //   location: "The Lord’s Brethren Place, Awka",
      //   description:
      //     "Ministry-wide Christmas Eve's Service for the year 2024.",
      //   image: "/Christmas-eve.jpg",
      // },


      const upcomingEvents = useMemo(() => {
        const currentDate = new Date();
        return events.filter(event => {
          const eventDate = new Date(event.date);
          // Reset time to start of day for accurate comparison
          currentDate.setHours(0, 0, 0, 0);
          eventDate.setHours(0, 0, 0, 0);
          return eventDate >= currentDate;
        });
      }, []);

  // const handleNavigation = (eventId) => {
  //   navigate(`/event/${eventId}`);
  // };
  
  // if (upcomingEvents.length === 0) {
  //   return (
  //     <div className="text-center py-12">
  //       <p className="text-gray-600 text-xl">No upcoming events at the moment</p>
  //     </div>
  //   );
  // }


  return (
    <>
      <body id="top">
        <Hero heroIMG={heroIMG} />

        {/* ABOUT US */}
        <section id="about" className="s-about">
          <div className="row row-y-center about-content">
            <div className="column large-half medium-full">
              <h3 className="subhead text-center"> The Lord's brethren CHURCH INT'L</h3>
              <p className="lead text-justify">
             The Lord’s Brethren Church International (TLBC) is the church arm of the Believers 
             School of Faith Ministries, a vibrant community of believers who, by faith, recognize 
             themselves as brethren with Jesus Christ and share the same Father as He. We are passionate 
             about spreading the Good News of His love to people across the world.
 
             Our vision is to call men and women by the Gospel of Jesus Christ into the Glory of God, 
             as we take the word of faith to peoples and nations of the world, accompanied by the 
             demonstration of the Holy Spirit.
              </p>
              <a href="/about" className="btn btn--primary btn--about">
                More About TLBC
              </a>
            </div>

            <div class="column large-half medium-full ">
              <ul class="about-sched">
                <li>
                  <h4>
                    SUNDAY Service
                  </h4>
                  <p className="mb-4 sm:mb-4 md:mb-2">
                    Every Sunday - 8:00 AM - 10:30 AM {" "}
                  </p>
                  <p>
                    All TLBC Int'l Church expressions
                  </p>
                </li>
                <li>
                  <h4>
                    Midweek Service
                  </h4>
                  <p className="mb-4 sm:mb-4 md:mb-2">
                    Every Wednesday - 5:30 PM - 7:30 PM{" "}
                  </p>
                  <p>
                  All TLBC Int'l Church expressions
                  </p>
                </li>
                <li>
                  <h4>
                    Night of Glory
                  </h4>
                  <p className="mb-4 sm:mb-4 md:mb-2">Last Friday of the month - 9:00 PM </p>
                  <p>
                  The Lord’s Brethren Place,  <br/>
                  3 Uche Ekwunife Crescent, Awka, Anambra State
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONNECT WITH US*/}
        <section className="s-connect">
          <div className="row connect-content">
            <div className="column large-half tab-full">
              <h3 className="display-1">ABOUT TLBCM</h3>
              <p
                className="text-justify p-2"
                style={{
                  lineHeight: "4rem",
                }}
              >
               The Lord’s Brethren Campus Ministry (TLBCM) is the campus arm of our Ministry, 
               entrusted with the responsibility of bringing the message of the Gospel to 
               students in tertiary institutions. It is a platform inspired by the Holy Spirit 
               years ago, aimed at reaching individuals at this critical stage of life with the 
               Gospel and the vision of our Ministry.
 
              Through TLBCM, we seek to give students’ lives meaning and encourage them to actively 
              participate in the work of ministry, both during their time in higher education and beyond.
              </p>
              {/* TLBC Int'l is a community of the Lord’s Brethren who share the same passion 
              as the Lord Jesus Christ to reach the whole world with the message of His saving grace.
              We make known and bring men into their inheritance in Christ, by teaching them the 
              principles and teachings of the Bible through the Holy Spirit. */}
              <a
                href="/contact"
                className="btn btn--primary h-full-width"
              >
                I'm Interested
              </a>
            </div>
            <div className="column large-half tab-full">
              <h3 className="display-1">ABOUT TLTN</h3>
              <p
                className="text-justify"
                style={{
                  lineHeight: "4rem",
                }}
              >
               The Lord’s Teen Network (TLTN) is our dedicated ministry to teenagers, both within our church 
               and in various communities. This arm of the Ministry exists primarily because our journey began 
               as a teenage gathering, and we remain deeply committed to engaging with teenagers, catching them 
               young for Christ, and helping them discover a purpose for living.
 
              Through TLTN, we equip young people with the tools to apply discipleship in the context of modern culture, 
              empowering them to live out their faith in a dynamic world.              </p>

                {/* TLBC Int'l has expressions across various 
               locations in Nigeria. 
               Our locations include:
                Awka, Nnewi, Ihiala, Ekwulobia and Onitsha.
                We also have our campus churches at:
                Nnamdi Azikiwe University Awka, Chukwuemeka Odumegwu Ojukwu (COOU) Uli and Igbariam, 
                Anambra State Polytechnic (ANSPOLY) Mgbakwu, Federal Polytechnic Nekede,
                Federal Polytechnic Oko, Federal University of Technology Owerri, Nnamdi Azikiwe University,
                College of Health Sciences UNIZIK, Okofia Nnewi and University of Lagos.
                For more information or inquiries, please contact us at +234 913 444 3057. */}

              <a
                href="/contact"
                className="btn btn--primary h-full-width"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="s-events">
          <div className="mx-auto px-4 py-8 max">
            <div className="flex justify-between items-center mb-8">
              <div class="row">
                <div class="column">
                  <h2 class="subhead">Upcoming Events.</h2>
                </div>
              </div>
            </div>

            {upcomingEvents.length > 0 ? (
            <div className="space-y-8 ">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col event-div md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="md:w-1/2 relative ">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-74 object-cover"
                    />
                  </div>

                  <div className="md:w-1/3 p-6 event-colums">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          <ul className="events-list__meta">
                            <li className="events-list__meta-date">
                              {event.date}
                            </li>
                            <li className="events-list__meta-time">
                              {" "}
                              {event.time}
                            </li>
                            <li className="events-list__meta-location">
                              {" "}
                              {event.location}
                            </li>
                          </ul>
                        </p>
                        <button className="btn btn--primary" onClick={handleNavigation}>
                          View Event Details    
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
      <div className="text-center py-12">
        <p className="text-gray-600 text-2xl">No upcoming events at the moment</p>
      </div>
    )}
  </div>
        </section>




        {/* SERIES */}

        <section className="s-series">
          <div
            className="series-img"
            style={{
              backgroundImage: `url(${styleIMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="row row-y-center series-content">
            <div className="column large-half medium-full">
              <h3 className="subhead">Our messages</h3>
              <h2>Discover the plan of God for you.</h2>
              <p className="text-justify p-2" style={{
            lineHeight: "4rem", 
        }}>

                God has a purpose for your life beautifully revealed in the gospel of His Son, Jesus Christ.
                We warmly invite you to explore our digital platforms, where you can access 
                messages from our dear man of God, Reverend Elochukwu Udegbunam.
                Through these messages, We believe you will receive education and 
                understanding of God's word.
              </p>
            </div>

            <div className="column large-half medium-full">
              <div className="series-content__buttons">
                <a href="https://www.youtube.com/@thelordsbrethrenchurchintl/videos" target='_blank' className="btn btn--large h-full-width">
                VIDEO MESSAGES
                </a>
                <a href="https://t.me/TheLordsbrethrenchurchintl" target='_blank' className="btn btn--large h-full-width">
                  AUDIO MESSAGES
                </a>
              </div>

              <div className="series-content__subscribe">
                <p>
                Visit our social media platforms and subscribe to our YouTube channel
                </p>

                <ul className="series-content__subscribe-links">
                  {/* <li className="ss-apple-podcast">
                    <a href="https://web.facebook.com/thelordsbrethrenchurchintl">Apple Podcast</a>
                  </li> */}
                  <li className="ss-spotify">
                    <a href="https://t.me/TheLordsbrethrenchurchintl">Telegram</a>
                  </li>
                  <li className="ss-soundcloud">
                    <a href="https://https://www.instagram.com/thelordsbrethrenchurchintl">Instagram</a>
                  </li>
                  <li className="ss-youtube">
                    <a href="https://t.me/TheLordsbrethrenchurchintl">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    
      </body>
    </>
  );
};

export default Homepage;
