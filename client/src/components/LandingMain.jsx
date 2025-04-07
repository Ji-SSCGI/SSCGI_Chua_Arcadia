import React from "react";
import HeroLogo from "./HeroLogo";
import Carousel from "./Carousel";

const LandingMain = () => {
  const carouselItems = [
    {
      image: "assets/img/clients/client-6.png",
      title: "PLASTIC PATHWAYS",
      description: "Leading the Way in Plastic Reuse & Reduction",
    },
    {
      image: "assets/img/clients/client-4.png",
      title: "TECHCYCLE",
      description: "Closing the Loop on E-Waste",
    },
    {
      image: "assets/img/clients/client-3.png",
      title: "FOOD FORWARD",
      description: "From Food Waste to Resource",
    },
    {
      image: "assets/img/clients/client-2.png",
      title: "Focus Area 4",
      description:
        "Description of the focus area. This provides a brief overview of the goal or target.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <HeroLogo />
          </div>
          <div className="hero-text">
            <h1>SUSTAINABILITY HUB</h1>
            <p>
              Driving Progress Towards a <span>Circular Economy</span>
            </p>
          </div>
        </div>
      </section>

      <section className="network">
        <h2>A Growing Network for Impact</h2>
        <div className="network-container">
          {/* Text Part */}
          <div className="text-part">
            <p>
              Arcadia brings together a diverse ecosystem of changemakers,
              including the academ, local and national government agencies,
              NGOs, industry organizations, and chambers of commerce.
            </p>
            <p>
              By fostering cross-sector collaboration, we ensure that circular
              economy strategies are informed, inclusive, and built for
              long-term sustainability.
            </p>
          </div>

          {/* Image Grid Part */}
          <div className="image-grid">
            <img
              className="image-item img"
              src="assets/img/clients/client-1.png"
              alt="Client 1"
            />
            <img
              className="image-item img"
              src="assets/img/clients/client-2.png"
              alt="Client 2"
            />
            <img
              className="image-item img"
              src="assets/img/clients/client-3.png"
              alt="Client 3"
            />
            <img
              className="image-item img"
              src="assets/img/clients/client-4.png"
              alt="Client 4"
            />
            <img
              className="image-item img"
              src="assets/img/clients/client-5.png"
              alt="Client 4"
            />
            <img
              className="image-item img"
              src="assets/img/clients/client-6.png"
              alt="Client 6"
            />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <h2>Three Key Components</h2>
        <div className="feature-container">
          <div className="services-grid">
            <div className="service-item">
              <img
                className="c-img"
                src="https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"
                alt="key-component1"
                srcset=""
              />
              <h4>Events</h4>
              <p>
                Arcadia serves as a platform that brings together youth,
                businesses, researchers, governments, and industry experts
                through forums, summits, workshops, and hackathons.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="service-item">
              <img
                className="c-img"
                src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400"
                alt="key-component1"
                srcset=""
              />
              <h4>Knowledge Portal</h4>
              <p>
                Arcadia serves as a centralized resource for cutting-edge
                research, actionable insights, and real-world case studies that
                drive the transition to a circular economy.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="service-item">
              <img
                className="c-img"
                src="https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png"
                alt="key-component1"
                srcset=""
              />
              <h4>Innovation and Solution Exchange</h4>
              <p>
                Arcadia networks with forward-thinking companies to showcase
                cutting-edge solutions and technologies that accelerate the
                transition to a circular economy.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section with Carousel */}
      <section className="focus">
        <h2>Our Focus in the Philippines Context</h2>
        <div className="focus-container">
          <Carousel items={carouselItems} />
        </div>
      </section>

      {/* About Us Section*/}
      {/* Contact Us Section */}
      <section className="contact-us">
      <h2 className=" ">Contact Us</h2>
        <div className="contact-container">
          <h4>Additional questions?</h4>
          <h5>Please submit your question here and we will respond as quickly as possible.</h5>
          <form className="contact-form">
            <label>
              Topic:
              <select name="topic" required>
                <option value="">Select a topic</option>
                <option value="careers">Careers</option>
                <option value="services">Services</option>
                <option value="press">Press/Media Relations</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Name:
              <input type="text" name="name" required />
            </label>

            <label>
              Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Company:
              <input type="text" name="company" />
            </label>

            <label>
              Location:
              <input type="text" name="location" />
            </label>

            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
            
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LandingMain;
