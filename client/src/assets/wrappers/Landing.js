import styled from "styled-components";

const Wrapper = styled.section`
/* General */

* {
  font-family: "Bower-Bold", sans-serif;
}
body {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2{ 
  font-size: 42px;
  color: #22703c;
  text-transform: none;
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

/* Add some styles to ensure the modal is displayed correctly */
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  /* Make sure the modal appears on top */
}

/* Modal content */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
}

/* Modal buttons container */
.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* Button styling */
.modal-buttons button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.modal-buttons button:first-child {
  background-color: #ccc;
}

.modal-buttons button:last-child {
  background-color: red;
  color: white;
}


/*--------------------------------------------------------------
# NavBar
--------------------------------------------------------------*/
/* Custom Styles for Navbar */
.navbar {
  background-color: #096026; /* Light background color */
  padding: 1rem 2rem;
  position: sticky;
  top: 0; /* Ensures it sticks to the top of the page */
  z-index: 1000; /* Ensures it's above other content */
  width: 100%; /* Ensure the navbar spans the full width */
}

.navbar .logo{
  height: 3rem;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff;
}

.navbar-nav .nav-link {
  color: #ffffff;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #085622;
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
  align-items: center; /* Center the content vertically */
  position: relative;
  overflow: hidden;
}

/* Hero Image */
.hero {
  height: calc(100vh - 4rem); /* Adjust height, accounting for any potential navbar */
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  text-align: center;
  padding: 0 20px;
  margin-bottom: 1rem;
  overflow: hidden; /* Prevent overflow if content grows too large */
  color: #fff; /* White text color */
  background-color: #22703c; /* Background color for hero section */
  border-radius: 0;
}

.hero-container {
  display: flex;
  flex-direction: column; /* Stacks items vertically */
  align-items: center; /* Centers items horizontally */
  justify-content: center; /* Centers items vertically */
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  color: #333;
}

.hero-content p span {
  color: #00bfa6; /* Highlighted text color */
}

.hero-img {
  max-width: 150px; /* Adjust size of logo */
  margin-bottom: 20px; /* Space between logo and h1 */
}

  .btn-primary, .btn-secondary {
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
}

.btn-primary {
  background-color: #085622 !important;
  color: #ffffff;
}

.btn-secondary {
  background-color: #fff;
  color: #085622;
}

.hero-img {
  max-width: 100%;
  margin-top: 30px; /* Spacing between the image and content */
}

/* Responsive Styling for Small Screens */
@media (max-width: 768px) {
  .hero { 
  }

  .hero-2, .hero-3 {
    display: none; /* Hides additional elements (if any) for small screens */
  }

  .hero-container {
    margin-top: 2.4rem; /* Spacing for small screens */
  }

  .hero .logo {
    width: 100vw; /* Makes the logo span the width on smaller screens */
  }

  .bg-img {
    display: none; /* Hides background image on smaller screens */
  }
}

/* Button Styling (Call-to-Action Button) */
.cta-button {
  display: inline-block;
  padding: 12px 36px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #FFEB3B;
  color: #2E7D32;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-top: 1px; /* Space between text and button */
}

.cta-button:hover {
  background-color: #2E7D32;
  color: white;
  transform: scale(1.1);
}

.cta-button:active {
  transform: scale(1);
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
  gap: 1rem; /* Space between grid items */
  max-width: 40%;
}

.image-item img {
  width: 100%;
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
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

.featured-services .c-img{
  width: auto;
  height: 25rem;
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

.btn-event {
  text-decoration-line: none;
  color: #ffffff;
}
.btn-primary:hover {
  background-color: #009f8b;
}

/* Responsive */
@media (max-width: 768px) {

  .featured-services {
  }

  .services-grid {
    grid-template-columns: 1fr; /* 2 columns on medium screens */
  }

  .service-item {
    width: 100%;
    justify-content: center;  
  }

  .c-img {
    width: 150%
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
}

/* Focus Section */
.focus {
  padding: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.focus h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.focus-container {
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  height: 70vh; /* Default height for large screens */
  overflow: hidden; /* Prevent overflow */
}

.carousel {
  position: relative;
  overflow: hidden; /* Hide items outside the visible area */
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease; /* Smooth transition when moving items */
  width: 100%;
}

.focus-item {
  min-width: 100%; /* Each item should take up 100% of the carousel */
  text-align: center;
  justify-content: center;
  flex: 0 0 auto; /* Prevent shrinking */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem; /* Add padding for spacing */
}

.focus-item img {
  width: 100%; /* Make images responsive */
  max-width: 20rem; /* Limit the max size of images */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  max-height: 200px; /* Limit height of the image */
}

.focus-item h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.focus-item p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
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

/* Dot Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel-indicators .dot {
  width: 10px;
  height: 10px;
  margin-right: 1rem;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicators .dot.active {
  background-color: #096026;
}

/* Responsive Styles */

/* For tablet and smaller screens (below 1024px) */
@media (max-width: 1024px) {
  .focus-container {
    padding: 2rem;
    height: 60vh;
  }

  .carousel {
    width: 90%; /* Ensure carousel fits within the screen */
  }

  .carousel-track {
    width: 100%; /* Adjust carousel track width */
  }

  .focus-item img {
    max-width: 18rem; /* Reduce max image size on tablets */
    max-height: 180px; /* Slightly smaller max-height for tablets */
  }

  .focus-item h4 {
    font-size: 1.3rem; /* Slightly smaller text on tablets */
  }

  .focus-item p {
    font-size: 0.95rem; /* Slightly smaller description text */
  }
}

/* For mobile screens (below 768px) */
@media (max-width: 768px) {
  .focus-container {
    padding: 1.5rem;
    height: auto; /* Remove fixed height for mobile */
  }

  .carousel {
    width: 100vw; /* Full width for mobile screens */
  }

  .carousel-track {
    display: flex;
    transition: transform 0.3s ease;
    width: 100%; /* Make the track only fit 1 item at a time */
  }

  .focus-item {
    flex: 0 0 100%; /* Each item takes 100% of the width */
    margin: 0; /* No margin needed, only 1 item per dot */
  }

  .focus-item img {
    max-width: 100%;
    height: auto; /* Make images scale while maintaining aspect ratio */
    max-height: 150px; /* Reduce height on mobile */
  }

  .focus-item h4 {
    font-size: 1.2rem;
  }

  .focus-item p {
    font-size: 0.9rem;
  }

  .carousel-indicators {
    margin-top: 1rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    margin-right: 0.5rem;
  }
}

/* For very small screens (below 480px) */
@media (max-width: 480px) {
  .focus h2 {
    font-size: 1.5rem; /* Reduce title size */
  }

  .focus-container {
    padding: 1rem;
    height: auto;
  }

  .carousel {
    width: 100%; /* Full width for very small screens */
  }

  .carousel-track {
    width: 100%;
  }

  .focus-item {
    flex: 1 0 100%; /* Items take 90% of the width on very small screens */
  }

  .focus-item img {
    max-width: 100%;
    height: auto;
    max-height: 120px; /* Further reduce max-height for small screens */
  }

  .focus-item h4 {
    font-size: 1rem; /* Smaller title font */
  }

  .focus-item p {
    font-size: 0.85rem; /* Smaller paragraph font */
  }

  .carousel-indicators {
    margin-top: 1rem;
  }

  .dot {
    width: 6px;
    height: 6px;
    margin-right: 0.4rem;
  }
}

/* Event Carousel Styles */
.event-carousel {
  position: relative;
  overflow: hidden;
}

.event-carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.event-carousel-item {
  flex: 0 0 auto;
  width: 33.33%; /* Default - 3 items per page */
  padding: 10px;
  box-sizing: border-box; /* Ensure padding doesn't affect item width */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-carousel-image {
  width: 100%;
  height: 15rem; /* Set a fixed height for images */
  object-fit: cover;
  border-radius: 8px;
}

.event-carousel-content {
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center-align content */
  min-height: 160px; /* Ensure there's enough space for title and description */
}

.event-carousel-content h4 {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  min-height: 30px; /* Set a minimum height for the title */
}

.event-carousel-content p {
  font-size: 14px;
  color: #333;
  min-height: 50px; /* Set a minimum height for description */
}

.event-btn-primary {
  background-color: #085622;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
}

.event-btn-primary a {
  color: white;
  text-decoration: none;
}

.event-btn-secondary {
  background-color: #ffffff;
  color: #085622;
  border: none;
  padding: 10px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
}

.event-btn-secondary a {
  color: #096026;
  text-decoration: none;
}

/* Navigation Buttons */
.event-carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.event-prev-btn {
  left: 10px;
}

.event-next-btn {
  right: 10px;
}

/* Dot Indicators */
.event-carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.event-dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.event-dot:hover {
  background-color: #007bff;
}

.event-active {
  background-color: #007bff;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .event-carousel-item {
    width: 50%; /* 2 items per page for tablets */
  }

  .event-carousel-btn {
    font-size: 20px; /* Smaller navigation buttons for tablets */
  }

  .event-carousel-content h4 {
    font-size: 16px; /* Adjusting title font size for tablets */
  }

  .event-carousel-content p {
    font-size: 12px; /* Adjusting description font size for tablets */
  }
}

@media (max-width: 768px) {
  .event-carousel-item {
    width: 100%; /* 1 item per page for mobile */
  }

  .event-carousel-btn {
    font-size: 18px; /* Smaller navigation buttons for mobile */
  }

  .event-carousel-content h4 {
    font-size: 14px; /* Adjusting title font size for mobile */
  }

  .event-carousel-content p {
    font-size: 12px; /* Adjusting description font size for mobile */
  }
}

@media (max-width: 480px) {
  .event-carousel-item {
    width: 100%; /* 1 item per page for smaller devices */
  }

  .event-carousel-btn {
    font-size: 16px; /* Even smaller navigation buttons for smaller screens */
  }
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
  color: #3a8051;
  text-transform: none;
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
  color: #3a8051;
  text-transform: none;
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

.feature-content .f-img {
  width: 100%;  
  height: auto;
  max-height: 20rem;
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

.f-btn a {
  text-decoration: none;
  color: #00bfa6;
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


// Contact Us
.contact-us {
  margin-bottom: 1rem;
  padding: 2rem;
}

.contact-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.contact-form {
  width: 50%;
}

.contact-main-text {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.contact-form label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.btn-primary {
  background-color: #2e8b57;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-form{
    width: 100%;
  }
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
  margin-bottom: 5rem;
}

.footer-top h4 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #22703c;
}

.footer-top p {
  font-size: 18px;
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

.footer-bottom .logo {
  height: 3rem;
  width: auto;
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

  .footer-logo .logo {
    width: 10rem;
  }
}

`;

export default Wrapper;