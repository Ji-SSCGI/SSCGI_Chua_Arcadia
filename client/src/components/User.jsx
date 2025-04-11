import React from "react";
import { FaEnvelope, FaUserAlt, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event"; // We can reuse this wrapper for styling
import EventInfo from "./EventInfo"; // Reuse EventInfo for consistent info display
import { Form } from "react-router-dom";

const User = ({
  _id,
  name,
  email,
  lastName,
  location,
  role,
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icons">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name} {lastName}</h5>
          <p>{email}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <EventInfo icon={<FaMapMarkerAlt />} text={location} />
          <EventInfo icon={<FaUserShield />} text={role} />
        </div>

        <footer className="actions">
          {<Link to={`../edit-user/${_id}`} className="btn edit-btn">
            Edit
          </Link>}
          <Form method="post" action={`../delete-user/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default User;
