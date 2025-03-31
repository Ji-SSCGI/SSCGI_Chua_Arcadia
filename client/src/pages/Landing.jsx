import React from "react";
import Wrapper from "../assets/wrappers/Landing";
import { HomeNavBar, LandingMain, Footer } from "../components/";

// Main ClientLanding Component
const Landing = () => {
  return (
    <Wrapper>
      <HomeNavBar />
      <LandingMain />
      <Footer />
    </Wrapper>
  );
};

export default Landing;
