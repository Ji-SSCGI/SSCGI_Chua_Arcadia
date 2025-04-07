import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <h4>SUSTAINABILITY HUB</h4> 
          <h5>Smarter Cities, Greener Communities.</h5>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-left">
            <h5>ARCADIA</h5>
            <h6>Arcadia is a sustainability hub for companies, commited to advancing sustainability practices, and
              accelarating the transition to a circular economy.
            </h6>
          </div>
          <div className="footer-center">
            <div>
              <h5>Events</h5>
            </div>
            <div>
              <h5>Knowledge Portal</h5>
            </div>
            <div>
              <h5>Initiatives</h5>
            </div>
          </div>
          <div className="footer-right">
            <h5>Contact Us</h5>
            <p>kimchen08@gmail.com</p>
            <p>+63969 666 3435</p>
            <p>www.arcadia.org</p>
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
