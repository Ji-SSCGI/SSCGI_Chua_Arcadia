import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event";
import { Form } from "react-router-dom";

const Partner = ({ _id, partnerName, partnerDescription, partnerImg }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">
          <img
          className="partner-icon-img"
            src={partnerImg}
            alt={`${partnerName} icon`}
          />
        </div>
        <div className="info">
          <h5>{partnerName}</h5>
          <p>{partnerDescription}</p>
        </div>
      </header>
      <div className="content">
        <footer className="actions">
          <Link to={`../edit-partner/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-partner/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Partner;
