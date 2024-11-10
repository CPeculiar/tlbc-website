import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import headerIMG from '/android-chrome-192x192.png';

import '../../css/base.css';
import '../../css/main.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="s-header">
      <div className="header-logo">
        <Link to="/" className="site-logo">
          <img src={headerIMG} alt="Homepage" 
            className='headerImage'
          />
        </Link>
      </div>

      <nav 
        className="header-nav-wrap"
        style={{ display: isMenuOpen ? 'block' : '' }}
      >
        <ul className="header-nav text-lg">
          <li className="current">
            <Link to="/" title="Home">Home</Link>
          </li>
          <li>
            <Link to="/about" title="About">About</Link>
          </li>
          {/* <li>
            <Link to="/event" title="Services">Events</Link>
          </li> */}
          <li>
            <Link to="/contact" title="Contact us">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        className={`header-menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`}
        onClick={toggleMenu}
      >
        <span>Menu</span>
      </button>

      <style>
        {`
          .header-menu-toggle {
            z-index: 102;
            display: none;
            height: 4.2rem;
            width: 4.2rem;
            line-height: 4.2rem;
            font-family: "Lora", serif;
            font-size: 1.4rem;
            text-transform: uppercase;
            letter-spacing: .2rem;
            color: rgba(255, 255, 255, 0.5);
            transition: all .3s;
            position: absolute;
            right: 32px;
            top: 1rem;
            background: none;
            border: none;
            cursor: pointer;
          }

          .header-menu-toggle:hover,
          .header-menu-toggle:focus {
            color: #ffffff;
          }

          .header-menu-toggle span {
            display: block;
            width: 2.4rem;
            height: 2px;
            background-color: #ffffff;
            transition: all .5s;
            font: 0/0 a;
            text-shadow: none;
            color: transparent;
            margin-top: -1px;
            position: absolute;
            top: 50%;
            left: .9rem;
            right: auto;
            bottom: auto;
          }

          .header-menu-toggle span::before,
          .header-menu-toggle span::after {
            content: '';
            width: 100%;
            height: 100%;
            background-color: inherit;
            transition: all .5s;
            position: absolute;
            left: 0;
          }

          .header-menu-toggle span::before {
            top: -.9rem;
          }

          .header-menu-toggle span::after {
            bottom: -.9rem;
          }

          .header-menu-toggle.is-clicked span {
            background-color: rgba(255, 255, 255, 0);
            transition: all .1s;
          }

          .header-menu-toggle.is-clicked span::before,
          .header-menu-toggle.is-clicked span::after {
            background-color: white;
          }

          .header-menu-toggle.is-clicked span::before {
            top: 0;
            transform: rotate(135deg);
          }

          .header-menu-toggle.is-clicked span::after {
            bottom: 0;
            transform: rotate(225deg);
          }

          @media screen and (max-width: 800px) {
            .header-nav-wrap {
              display: none;
              height: auto;
              width: 100%;
              background-color: black;
              padding: 14rem 4.4rem 6.4rem;
              position: absolute;
              top: -2.8rem;
              left: 0;
            }

            .header-nav-wrap .header-nav {
              display: block;
              height: auto;
              font-size: 10px;
              margin: 0 0 4rem 0;
              padding-left: 0;
              border-top: 1px solid rgba(255, 255, 255, 0.06);
            }

            .header-nav-wrap .header-nav li {
              display: block;
              margin: 0;
              padding: 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            }

            .header-nav-wrap .header-nav li a {
              padding: 18px 0;
              line-height: 20px;
              display: block;
            }

            .header-menu-toggle {
              display: block;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;