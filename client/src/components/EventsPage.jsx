import React from "react";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

function EventsPage() {

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <div className="hero-content">
            <h2>
              Foster discourse and drive actionable sustainability solutions
            </h2>
          </div>
        </div>
      </section>

      {/* Events and Colloboration Section */}
      <section className="collab">
        <div className="collab-container">
          <div className="collab-content collab-space">
            <div
              className="collab-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>DEEP DIVE DIALOGUES</h3>
              <p>
                Our Deep Dive Dialogue sessions are structured discussions
                designed to encourage stakeholders to share their insights and
                experiences on the challenges and opportunities in
                sustainability. The sessions will be focus on sharing
                on-the-ground challenges, case studies, good and bad practices,
                as well as solutions, technologies, and best practices adopted
                by other countries.
              </p>
            </div>
            <div
              className="collab-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-1.png" alt="Event 1" />
              </div>
            </div>
          </div>

          <div className="collab-content-r collab-space">
            <div
              className="collab-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>HACKATHON AND CAMPAIGNS</h3>
              <p>
                Arcadia organizes hackathons and campaign-driven events designed
                to bring together innovative minds and passionate advocates to
                solve real-world sustainability challenges. These immersive,
                hands-on sessions invite companies, young leaders, and experts
                to collaborate in developing creative solutions, while aligning
                with corporate sustainability goals and advocacy efforts.
                Through these events, we foster the rapid prototyping of ideas,
                accelerate problem-solving, and drive the development of
                actionable strategies for environmental and social impact.
              </p>
            </div>
            <div
              className="collab-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-2.png" alt="Event 2    " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services-2">
        <h2>Upcoming Events</h2>
        <div className="feature-container">
          <div className="feature-content">
            <div>
              <img
                className="f-img"
                src="assets/img/features-1.jpg"
                alt="Event 1"
              />
              <i className="bi bi-briefcase"></i>
              <h4>DEEP DIVE DIALOGUES</h4>
              <p>Forums, Panel Dicussions, Fireside Chats, Summits</p>
              <button className="btn-primary">More</button>
              <button className="btn-secondary">Register</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/features-2.jpg"
                alt="Event 2"
              />
              <i className="bi bi-card-checklist"></i>
              <h4>Hackathons & Campaign</h4>
              <p>Workshops and Hackathons</p>
              <button className="btn-primary">More</button>
              <button className="btn-secondary">Register</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/features-3.jpg"
                alt="Event 3"
              />
              <i className="bi bi-bar-chart"></i>
              <h4>PLASTIC PATHWAYS</h4>
              <p>Leading the Way in Plastic Reuse and Reduction</p>
              <button className="btn-primary">More</button>
              <button className="btn-secondary">Register</button>
            </div>
          </div>
        </div>

        <h2>Previous Events</h2>
        <div className="feature-container">
          <div className="feature-content">
            <div>
              <img
                className="f-img"
                src="assets/img/tabs-1.jpg"
                alt="Event 1"
              />
              <i className="bi bi-briefcase"></i>
              <h4>DEEP DIVE DIALOGUES</h4>
              <p>Forums, Panel Dicussions, Fireside Chats, Summits</p>
              <button className="btn-primary">More</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/tabs-2.jpg"
                alt="Event 2"
              />
              <i className="bi bi-card-checklist"></i>
              <h4>Hackathons & Campaign</h4>
              <p>Workshops and Hackathons</p>
              <button className="btn-primary">More</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/tabs-3.jpg"
                alt="Event 3"
              />
              <i className="bi bi-bar-chart"></i>
              <h4>PLASTIC PATHWAYS</h4>
              <p>Leading the Way in Plastic Reuse and Reduction</p>
              <button className="btn-primary">More</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
