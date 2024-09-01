import React from "react";
import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="about-site">About BookMate</h3>
            <p>If you can't afford somewhere else, here you will surely</p>
          </div>

          <div className="social-section">
            <h3>Social Media</h3>
            <div className="social-section-icons">
              <Link to="https://www.facebook.com" target="_blank">
                    <FaFacebook className="social-section-icon" style={{fontSize: 40 }}/>
              </Link>
              <Link to="https://www.instagram.com" target="_blank">
                    <FaInstagramSquare className="social-section-icon" style={{fontSize: 40 }}/>
              </Link>
              <Link to="https://www.x.com" target="_blank">
                    <FaSquareXTwitter className="social-section-icon" style={{fontSize: 40}}/>
              </Link>
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact">Contact Us</h3>
            <p>Email <MdAlternateEmail style={{color:'white'}}/>: support@bookmate.com</p>
            <p>Phone <GiRotaryPhone style={{color:'white'}}/>: +322786754</p>
            <p>  <CiLocationOn style={{color:'white'}}/> Address: Britslei, Antwerp, 2018</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} BookMate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
