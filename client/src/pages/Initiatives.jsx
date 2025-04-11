import React from "react";
import Wrapper from "../assets/wrappers/Landing";
import { HomeNavBar, InitiativesPage, Footer } from "../components/";

// Main ClientLanding Component
const Initiatives = () => {
  return (
    <Wrapper>
      <HomeNavBar />
      <InitiativesPage/>
      <Footer />
    </Wrapper>
  );
};

export default Initiatives;
