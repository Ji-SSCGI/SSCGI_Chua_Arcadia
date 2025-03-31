import React from "react";
import Wrapper from "../assets/wrappers/Landing";
import { HomeNavBar, EventsPage, Footer } from "../components/";

// Main ClientLanding Component
const Events = () => {
  return (
    <Wrapper>
      <HomeNavBar />
      <EventsPage />
      <Footer />
    </Wrapper>
  );
};

export default Events;
