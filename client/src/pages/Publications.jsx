import React from "react";
import Wrapper from "../assets/wrappers/Landing";
import { HomeNavBar, PublicationsPage, Footer } from "../components/";

// Main ClientLanding Component
const Publications = () => {
  return (
    <Wrapper>
      <HomeNavBar />
      <PublicationsPage />
      <Footer />
    </Wrapper>
  );
};

export default Publications;
