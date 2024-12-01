import React, { useState } from "react";
import NewsletterSubscription from "./NewsletterSubscription";
import { X } from 'lucide-react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section class="s-social">
        <div class="row social-content">
          <div class="column">
            <ul class="social-list">
              <li class="social-list__item">
                <a
                  href="https://web.facebook.com/thelordsbrethrenchurchintl"
                  target="_blank"
                  title=""
                >
                  <span class="social-list__icon social-list__icon--facebook"></span>
                  <span class="social-list__text">Facebook</span>
                </a>
              </li>
              <li class="social-list__item">
                <a
                  href="https://www.youtube.com/@thelordsbrethrenchurchintl"
                  target="_blank"
                  title=""
                >
                  <span class="social-list__icon social-list__icon--email"></span>
                  <span class="social-list__text">Youtube</span>
                </a>
              </li>
              <li class="social-list__item">
                <a
                  href="https://www.instagram.com/thelordsbrethrenchurchintl"
                  target="_blank"
                  title=""
                >
                  <span class="social-list__icon social-list__icon--instagram"></span>
                  <span class="social-list__text">Instagram</span>
                </a>
              </li>
              <li class="social-list__item">
                <a href="https://x.com/ElochukwuTLBC" target="_blank" title="">
                  <span class="social-list__icon social-list__icon--twitter"></span>
                  <span class="social-list__text">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="s-footer">
        <NewsletterSubscription />

        <div className="row footer-top">
          <div className="column large-4 medium-5 tab-full">
            <h4 className="h6">
              Have any question? 
              </h4>
              <p>
              Contact us on:
              <a href="tel: 0913-444-5037">
                <p className="text-[#ffffff80] mb-0 hover:text-white"> 0913-444-5037</p>
              </a>
              <a
                href="mailto:info@thelordsbrethrenchurch.org"
              >
               <p className="text-[#ffffff80] mb-0 hover:text-white"> info@thelordsbrethrenchurch.org </p>
              </a>
            </p>
          </div>

          <div className="column large-half tab-full">
            <div className="row">
              <div className="column large-7 medium-full">
                <h4 className="h6">Our Location</h4>
                <p>
                  The Lord’s Brethren Place, <br />
                  3 Uche Ekwunife Crescent, Awka, <br />
                  Anambra State, Nigeria
                </p>

                <p>
                  <a
                    href="#"
                    onClick={openModal}
                    className="btn btn--footer flex items-center gap-2"
                  >
                    Get Direction
                  </a>
                </p>
              </div>

              <div className="column large-5 medium-full">
                <h4 className="h6">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/event">Upcoming Events</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-bottom text-center">
          <div className="column ss-copyright">
            <span>© Copyright TLBC Int'l</span>
            {/* <span>
              Designed by <a href="https://www.thelordsbrethrenchurch.org/">Tech Academy @2024</a>
            </span> */}
          </div>
        </div>

        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
            </svg>
          </a>
        </div>
      </footer>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-red-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Map */}
            <div className="p-4">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3456853358566!2d7.056821773041316!3d6.218063326641412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043830c5d178e93%3A0x3305b6015697a207!2sThe%20Lords%20Brethren%20Place%2C%20Awka!5e0!3m2!1sen!2sng!4v1703920380110!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Footer;
