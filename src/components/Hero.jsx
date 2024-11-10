import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg';

const Hero = ({ heroIMG }) => {
  useEffect(() => {
    // Initialize parallax effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.s-hero');
      if (hero) {
        const rate = scrolled * 0.3;
        hero.style.backgroundPosition = `center ${-rate}px`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (

    <section 
      className="s-hero"
      style={{
        backgroundImage: `url(${heroIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}

      data-parallax="scroll"
     data-image-src={heroImage} 
     data-natural-width='3000' data-natural-height='2000' 
     data-position-y='center'
    >
      <div className="hero-left-bar"></div>

      <div className="row hero-content">
        <div className="column large-full hero-content__text">
          <h1>
            Welcome <br />
             To 
           TLBC
          </h1>

          <div className="hero-content__buttons">
            <Link to="/event" className="btn btn--stroke">
              Upcoming Events
            </Link>
            <Link to="/about" className="btn btn--stroke">
              About Us
            </Link>
          </div>
        </div>
      </div> 



<ul className="hero-social">
        <li className="hero-social__title">Follow Us</li>
        <li>
          <a href="https://web.facebook.com/thelordsbrethrenchurchintl" title="" target='_blank'>Facebook</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@thelordsbrethrenchurchintl" target='_blank' title="">YouTube</a>
        </li>
        <li>
          <a href="https://t.me/TheLordsbrethrenchurchintl" target='_blank' title="">Telegram</a>
        </li>
        <li>
          <a href="https://www.instagram.com/elochukwutlbc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' title="">Instagram</a>
        </li>
      </ul>

      <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll">
          Scroll For More
        </a>
      </div>



      <style>
        {`
          .hero-social a {
            color: rgba(255, 255, 255, 0.3);
            transition: all .5s;
          }
 
.hero-scroll .scroll-link:hover,
.hero-scroll .scroll-link:focus {
  color: #fb8b23;
}

          @media screen and (max-width: 800px) {

          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              visibility: hidden;
              transform: translate3d(0, 100%, 0);
            }
            to {
              opacity: 1;
              visibility: visible;
              transform: translate3d(0, 0, 0);
            }
          }

          .hero-content {
            animation: fadeIn 2s ease-out;
          }
        `}
      </style>
      
    </section>
  );
};

export default Hero;





{/* <style>
        {`
      

          .hero-social {
            list-style: none;
            font-family: "Montserrat", sans-serif;
            font-size: .9rem;
            line-height: 4.8rem;
            text-transform: uppercase;
            letter-spacing: .4rem;
            color: #ffffff;
            margin: 0;
            position: absolute;
            bottom: 4.8rem;
            left: 0px;
            -webkit-transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
            transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
          }

          .hero-social a {
            color: rgba(255, 255, 255, 0.3);
            transition: all .5s;
          }

    

.hero-social li:last-child {
  margin-right: 0;
}

          .hero-scroll {
            position: absolute;
            right: 6rem;
            bottom: 0;
            -webkit-transform: rotate(-90deg) translate3d(100%, 50%, 0);
            transform: rotate(-90deg) translate3d(100%, 50%, 0);
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
          }

 
.hero-scroll .scroll-link:hover,
.hero-scroll .scroll-link:focus {
  color: #fb8b23;
}

          @media screen and (max-width: 800px) {

          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              visibility: hidden;
              transform: translate3d(0, 100%, 0);
            }
            to {
              opacity: 1;
              visibility: visible;
              transform: translate3d(0, 0, 0);
            }
          }

          .hero-content {
            animation: fadeIn 2s ease-out;
          }
        `}
      </style> */}