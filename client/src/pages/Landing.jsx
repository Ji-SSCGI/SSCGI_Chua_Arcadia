import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            Job<span>Tracking</span>App
          </h1>
          <p>
            I'm baby marxism palo santo unicorn trust fund vaporware kinfolk DIY
            chicharrones distillery photo booth synth woke. Viral franzen
            readymade, hexagon chambray lumbersexual microdosing poke fit neutra
            3 wolf moon keffiyeh paleo glossier big mood. Mukbang waistcoat
            sustainable plaid, whatever 8-bit yes plz. Kogi biodiesel XOXO lomo
            tofu, photo booth ennui bicycle rights irony try-hard hot chicken.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </Wrapper>
  );
};

export default Landing;
