import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify"; // Make sure you have toast notifications set up
import BGImage from "../assets/images/hero2-bg.png"

export const loader = async ({ request }) => {
  try {
    // Fetch the data from the API endpoint
    const { data } = await customFetch.get(
      "/public-events?eventStatus=Upcoming&eventStatus=Completed"
    );

    // Filter events based on eventStatus (Upcoming or Completed)
    const upcomingEvents = data.events.filter(
      (event) => event.eventStatus === "Upcoming"
    );
    const previousEvents = data.events.filter(
      (event) => event.eventStatus === "Completed"
    );

    return {
      upcomingEvents,
      previousEvents,
    };
  } catch (error) {
    toast.error(error.response?.data?.msg || "An error occurred.");
    return { upcomingEvents: [], previousEvents: [] }; // Return empty arrays on error
  }
};

function EventsPage() {
  const { upcomingEvents, previousEvents } = useLoaderData();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero bg-img" style={{ 
          backgroundImage: `url(${BGImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' 
        }}>
        <div className="container text-center">
          <div className="hero-content">
            <h2>
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
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-1.png" alt="Event 1" />
              </div>
            </div>
          </div>

          <div className="collab-content-r collab-space">
            <div
              className="collab-text"
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
            {upcomingEvents.map((event) => (
              <div className="f-img-container" key={event._id}>
                <img
                  className="f-img"
                  src={event.eventImg}
                  alt={event.eventTitle}
                />
                <i className="bi bi-briefcase"></i>
                <h4>{event.eventTitle}</h4>
                <p>{event.eventDescription}</p>
                <button className="btn-primary f-btn">
                  More</button>
                <button className="btn-secondary f-btn">
                  <a href={event.registrationURL} target="_blank">Register</a>
                </button>
              </div>
            ))}
          </div>
        </div>

        <h2>Previous Events</h2>
        <div className="feature-container">
          <div className="feature-content">
            {previousEvents.map((event) => (
              <div className="f-img-container" key={event._id}>
                <img
                  className="f-img"
                  src={event.eventImg}
                  alt={event.eventTitle}
                />
                <i className="bi bi-card-checklist"></i>
                <h4>{event.eventTitle}</h4>
                <p>{event.eventDescription}</p>
                <button className="btn-primary f-btn">More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
