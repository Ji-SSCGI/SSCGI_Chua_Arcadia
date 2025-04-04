import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <h4>SUSTAINABILITY HUB</h4>
          <p></p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-left">
            <h5>ARCADIA</h5>
          </div>
          <div className="footer-center">
            <div>
              <h5>Events</h5>
            </div>
            <div>
              <h5>Knowledge Portal</h5>
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
          <div className="footer-logo>">
            <p>© 2025 Arcadia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
