import React from "react";

const PublicationsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <div className="hero-content">
            <h2>Your Knowledge Hub for Waste Management</h2>
          </div>
        </div>
      </section>

      {/* Events and Colloboration Section */}
      <section className="collab">
        <div className="container">
          <div className="collab-content collab-space">
            <div
              className="collab-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>MARKET ANALYSIS</h3>
              <p>
                Arcadia conducts in-depth market analysis to provide businesses
                with a comprehensive understanding of the sustainability
                landscape. These analyses explore trends, opportunities,
                challenges, and key drivers in the transition to a circular
                economy. By delivering actionable insights, we enable companies
                to identify growth areas, anticipate market shifts, and align
                their strategies with the evolving demands of sustainable
                practices and consumer preferences.
              </p>
            </div>
            <div
              className="collab-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-4.png" alt="Event 1" />
              </div>
            </div>
          </div>

          <div className="collab-content-r collab-space">
            <div
              className="collab-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>POSITION PAPERS</h3>
              <p>
                Arcadia develops position papers that outline informed
                perspectives on critical sustainability issues. These papers
                offer a deep dive into industry challenges, policy
                recommendations, and strategic actions that stakeholders should
                adopt to drive systemic change. Backed by data, case studies,
                and expert insights, our position papers serve as authoritative
                resources for guiding decision-makers in business, government,
                and civil society toward impactful, sustainability-focused
                policies and practices.
              </p>
            </div>
            <div
              className="collab-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-5.png" alt="Event 2    " />
              </div>
            </div>
          </div>

          <div className="collab-content collab-space">
            <div
              className="collab-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>WASTE REPORTS AND MANIFESTO</h3>
              <p>
                Our waste reports provide detailed assessments of current waste
                management practices, with a focus on gaps, inefficiencies, and
                opportunities for improvement. These reports highlight both
                local and global case studies, offering solutions and
                technologies that can optimize waste management processes. By
                addressing critical issues in post-consumer waste, our waste
                reports empower companies, municipalities, and policymakers to
                implement effective, sustainable, and circular waste management
                strategies.
              </p>
            </div>
            <div
              className="collab-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="collab-image-grid">
                <img src="assets/img/clients/client-6.png" alt="Event 1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Opinion Editorials</h2>
        <div className="testimonial-container">
          <div className="services-grid">
            <div>
              <img
                className="f-img"
                src="assets/img/testimonials/testimonials-1.jpg"
                alt="Event 1"
              />
              <i className="bi bi-briefcase"></i>
              <h4>From compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/testimonials/testimonials-2.jpg"
                alt="Event 2"
              />
              <i className="bi bi-card-checklist"></i>
              <h4>From compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/testimonials/testimonials-3.jpg"
                alt="Event 3"
              />
              <i className="bi bi-bar-chart"></i>
              <h4>From compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports">
        <h2>Publish Waste Reports</h2>
        <div className="report-container">
          <div className="services-grid">
            <div>
              <img
                className="f-img"
                src="assets/img/about-company-3.jpg"
                alt="Event 1"
              />
              <i className="bi bi-briefcase"></i>
              <h4>From compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/about-company-2.jpg"
                alt="Event 2"
              />
              <i className="bi bi-card-checklist"></i>
              <h4>rom compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
            <div>
              <img
                className="f-img"
                src="assets/img/about-company-3.jpg"
                alt="Event 3"
              />
              <i className="bi bi-bar-chart"></i>
              <h4>From compliance to circularity</h4>
              <p>Bridging the Gap with EPR for Retail Plastics</p>
              <button className="btn-primary">Learn</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicationsPage;
