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
              <i className="bi bi-briefcase"></i>
              <h4>Events</h4>
              <div className="service-content">
                <p>
                  Arcadia serves as a platform that brings together youth,
                  businesses, researchers, governments, and industry experts
                  through forums, summits, workshops, and hackathons.
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
            <div className="service-item">
              <i className="bi bi-card-checklist"></i>
              <h4>Knowledge Portal</h4>
              <div className="service-content">
                <p>
                  Arcadia serves as a centralized resource for cutting-edge
                  research, actionable insights, and real-world case studies
                  that drive the transition to a circular economy.
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
            <div className="service-item">
              <i className="bi bi-bar-chart"></i>
              <h4>Innovation and Solution Exchange</h4>
              <div className="service-content">
                <p>
                  Arcadia networks with forward-thinking companies to showcase
                  cutting-edge solutions and technologies that accelerate the
                  transition to a circular economy.
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
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
      <section className="about-us">
        <div className="about-container">
          <h3 className="about-main-text">About Arcadia</h3>
          <p className="about-info">
            <span>Arcadia</span> is a sustainability hub for companies committed
            to advancing sustainability practices and accelerating the
            transition to a circular economy.
          </p>
          <p className="about-info">
            As a hub, it facilitates the exchange of leading sustainability
            practices and resources, fostering the development of cost-
            effective and efficient solutions to sustainability challenges.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LandingMain;
