import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <h3>SUSTAINABILITY HUB</h3> 
          <h6>Smarter Cities, Greener Communities.</h6>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-left">
            <h4>ARCADIA</h4>
            <p>Arcadia is a sustainability hub for companies, commited to advancing sustainability practices, and
              accelarating the transition to a circular economy.
            </p>
          </div>
          <div className="footer-center">
            <div>
              <h4>Events</h4>
            </div>
            <div>
              <h4>Knowledge Portal</h4>
            </div>
            <div>
              <h4>Initiatives</h4>
            </div>
          </div>
          <div className="footer-right">
            <h4>Contact Us</h4>
            <h6>For general inquiries:</h6>
            <p>gsm.arcadia@gmail.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom"> 
            <Logo className="logo" />
            <p>© 2025 Arcadia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
