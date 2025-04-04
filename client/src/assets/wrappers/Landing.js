import styled from "styled-components";

const Wrapper = styled.section`
/* General */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2{
  color: #00bfa6;
}

.hero h2{
  color: #00bfa6;
}

section {
  background-color: #f9f9f9;  /* Light gray background for sections */
  padding: 60px 20px;  /* Adding space inside each section */
  margin-bottom: 30px;  /* Space between sections */
  border-radius: 8px;  /* Optional: rounded corners for sections */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

/*--------------------------------------------------------------
# NavBar
--------------------------------------------------------------*/
/* Custom Styles for Navbar */
.navbar {
  background-color: #00bfa6; /* Light background color */
  padding: 1rem 2rem;
  position: sticky;
  top: 0; /* Ensures it sticks to the top of the page */
  z-index: 1000; /* Ensures it's above other content */
  width: 100%; /* Ensure the navbar spans the full width */
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-nav .nav-link {
  color: #333;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
}

.navbar-nav .nav-link:hover {
  color: #00bfa6;
  border-radius: 5px;
}

.navbar-toggler {
}

.navbar-toggler-icon {
}

/* Adjust Navbar on Larger Screens */
@media (min-width: 992px) {
  .navbar-nav .nav-item {
    margin-left: 20px;
  }
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #fff; /* White text color */
}

/* Hero Image */
.hero {
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  text-align: center;
  padding: 0 20px;
  margin-bottom: 1rem;
  overflow: hidden; /* Prevent overflow if content grows too large */
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Ensures content is aligned in the center */
  background-color: #00bfa6;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #333;
}

.hero-content p span {
  color: #00bfa6;
}

.hero-img {
  max-width: 150px; /* Adjust size of logo */
  margin-bottom: 20px; /* Space between logo and h1 */
}

.btn-primary, .btn-secondary {
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #00bfa6 !important;
  color: #fff;
}

.btn-secondary {
  background-color: #fff;
  color: #00bfa6;
  border: 1px solid #00bfa6;
}

.hero-img {
  max-width: 100%;
  margin-top: 30px;
}

/* Responsive Styling for Small Screens */
@media (max-width: 768px) {
  .hero-image {
    //display: none; /* Hide the image on smaller screens */
  }
}

/* Network Container Layout */
.network {
  //background-color: #e1ebf7;
  margin-bottom: 1rem;
  padding: 2rem;
}

.network-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem;
  gap: 20px;
}

.text-part {
  flex: 1 1 55%; /* Takes up 55% of the container width */
  max-width: 55%;
}

.text-part h2 {
  font-size: 2rem;
  padding: 2rem;
}

.text-part p {
  font-size: 1.2rem;
  margin-left: 2rem;
}

.image-grid {
  flex: 1 1 40%; 
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 100px; /* Space between grid items */
  max-width: 40%;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 8px; /* Optional, for rounded corners */
}

/* Responsive Design */
@media (max-width: 768px) {
  .network-container {
    flex-direction: column; /* Stack text and image grid vertically */
  }

  .text-part {
    max-width: 100%; /* Full width on mobile */
    margin-bottom: 20px;
  }

  .image-grid {
    max-width: 100%; /* Full width on mobile */
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
  }

  .image-item img {
    height: auto; /* Ensure images maintain aspect ratio on mobile */
  }
}


/* Featured Services Section */

.featured-services {
  //background-color: #e1ebf7;
  margin-bottom: 1rem;
  padding: 3rem;
}

.feature-container {
  padding: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;
}

.service-item {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures space between text and button */
  height: 100%; /* Makes sure all service items have the same height */
}

.service-item i {
  font-size: 40px;
  color: #00bfa6;
  margin-bottom: 15px;
}

.service-item h4 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.service-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Makes content area grow to take up available space */
  justify-content: flex-end; /* Push the button to the bottom */
}

.service-item p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #00bfa6;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start; /* Align button to the left */
}

.btn-primary:hover {
  background-color: #009f8b;
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
}

/* Focus Section */
.focus {
  //background-color: #e1ebf7;
  padding: 3rem;
  margin-bottom: 1rem;
}

.focus-container {
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
}

.carousel {
  position: relative;
  overflow: hidden; /* Hide items outside the visible area */
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease; /* Smooth transition when moving items */
}

.focus-item {
  min-width: 100%; /* Ensure each item takes up the full width of the carousel */
  text-align: center;
}

.focus-item img {
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.focus-item h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.focus-item p {
  font-size: 1rem;
  color: #555;
}

/* Carousel Navigation */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 50%;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel-indicators .dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicators .dot.active {
  background-color: #00bfa6;
}

/* About Section */
.about-us {
  padding: 80px 20px;
  background-color: #00bfa6;
  text-align: center;
  margin-bottom: 1rem;
}

.about-us span {
  color: #00bfa6;
  font-style: italic;
}

.about-main-text {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-info {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
}

/* Collab Section */
.collab {
  padding: 60px 20px;
  //background-color: #e1ebf7;
  margin-bottom: 1rem;
}

.collab-space{
  margin-bottom: 5rem;
}

.collab-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 0.5rem;
}

.collab-content-r {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 0.5rem;
}

.collab-text {
  flex: 1;
}

.collab-text h3 {
  margin-bottom: 20px;
  color: #00bfa6;
}

.collab-text ul li {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  background-color: #aed163;
}

.collab-image-grid {
  display: grid;
  grid-template-columns: repeat(2fr, 1fr);
  gap: 10px;
}

.collab-image-grid img {
  width: 100%;
  border-radius: 5px;
}

/* knowledge Section */
.knowledge {
  padding: 60px 20px;
  background-color: #e1ebf7;
  //margin-bottom: 1rem;
}

.knowledge-content {
  display: flex;
  flex-wrap: wrap;
  gap: 24rem;
  justify-content: space-between;
}

.knowledge-content-r {
  margin-top: 5rem;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 24rem;
  justify-content: space-between;
}

.knowledge-text {
  flex: 1;
}

.knowledge-text h3 {
  margin-bottom: 20px;
  color: #00bfa6;
}

.knowledge-text ul li {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

.knowledge-image-grid {
  display: grid;
  grid-template-columns: repeat(2fr, 1fr);
  gap: 10px;
}

.knowledge-image-grid img {
  width: 100%;
  border-radius: 5px;
}

/* Featured Services Section */
.featured-services-2 {
  padding: 20px;
  //background-color: #e1ebf7;
}

.feature-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Space between the columns */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  padding: 20px;
}

.feature-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 100%;
}

.feature-content div {
  flex: 1 1 30%; /* Each column takes up 30% width */
  min-width: 280px; /* Prevent columns from getting too narrow */
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-content img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.feature-content i {
  font-size: 3rem;
  color: #00bfa6;
  margin-bottom: 15px;
}

.feature-content h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-content p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  font-size: 1rem;
  margin: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #00bfa6;
  color: white;
}

.btn-secondary {
  background-color: #f1f1f1;
  color: #333;
}

/* Adjustments for Smaller Screens */
@media (max-width: 768px) {
  .feature-container {
    flex-direction: column; /* Stack the items vertically on smaller screens */
    align-items: center;
  }

  .feature-content {
    flex-direction: column; /* Stack the items vertically */
    align-items: center;
  }

  .feature-content div {
    flex: 1 1 100%; /* Take up full width on small screens */
    margin-bottom: 20px;
  }
}

/* Testimonials Section */
.testimonials {
  padding: 20px;
  //background-color: #e1ebf7;
}

.testimonial-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.services-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  width: 100%;
}

.services-grid div {
  flex: 1 1 30%; /* Each column takes up 30% width */
  min-width: 280px; /* Prevent columns from getting too narrow */
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.services-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.services-grid i {
  font-size: 3rem;
  color: #00bfa6;
  margin-bottom: 15px;
}

.services-grid h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.services-grid p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #00bfa6;
  color: white;
  cursor: pointer;
}

/* Reports Section */
.reports {
  padding: 20px;
  //background-color: #e1ebf7;
}

.report-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.services-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  width: 100%;
}

.services-grid div {
  flex: 1 1 30%; /* Each column takes up 30% width */
  min-width: 280px; /* Prevent columns from getting too narrow */
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.services-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.services-grid i {
  font-size: 3rem;
  color: #00bfa6;
  margin-bottom: 15px;
}

.services-grid h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.services-grid p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #00bfa6;
  color: white;
  cursor: pointer;
}

/* Footer */
.footer {
  background-color: #f8f9fa;
  padding: 40px 20px;
  color: #212529;
  font-family: Arial, sans-serif;
  width: 100%;
}

/* Top Section */
.footer-top {
  text-align: center;
  margin-bottom: 20px;
}

.footer-top h4 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.footer-top p {
  font-size: 16px;
  color: #6c757d;
}

/* Middle Section */
.footer-middle {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 20px;
}

.footer-left,
.footer-right {
  flex: 1;
  min-width: 150px;
}

.footer-center {
  display: flex;
  gap: 40px;
}

.footer-center div {
  min-width: 150px;
}

.footer-center h5,
.footer-left h5,
.footer-right h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-center ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-center ul li {
  margin-bottom: 5px;
}

.footer-center ul li a {
  text-decoration: none;
  color: #6c757d;
  transition: color 0.3s ease;
}

.footer-center ul li a:hover {
  color: #007bff;
}

/* Bottom Section */
.footer-bottom {
  text-align: center;
  border-top: 1px solid #dee2e6;
  padding-top: 10px;
  margin-top: 20px;
}

.footer-logo .logo{
  height: 2rem;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.footer-bottom p {
  font-size: 14px;
  color: #6c757d;
}

/* Responsive for Footer */
@media (max-width: 768px) {
  .footer-middle {
    flex-direction: column;
    gap: 20px;
  }

  .footer-center {
    flex-direction: column;
    gap: 20px;
  }

  .footer-left,
  .footer-right {
    min-width: 100%;
  }

  .footer-center h5,
  .footer-left h5,
  .footer-right h5 {
    font-size: 14px;
  }

  .footer-center ul li a {
    font-size: 14px;
  }

  .footer-bottom p {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .footer-top h4 {
    font-size: 20px;
  }

  .footer-top p {
    font-size: 14px;
  }

  .footer-center ul li a {
    font-size: 13px;
  }

  .footer-bottom p {
    font-size: 11px;
  }
}

`;

export default Wrapper;