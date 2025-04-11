import React from "react";
import { FaEnvelope, FaUserAlt, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event"; // Reuse the same style as Event
import EventInfo from "./EventInfo"; // We'll reuse this for consistency

const User = ({
  _id,
  name,
  email,
  location,
  role,
  lastName,
}) => {
  const handleDelete = (e) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) {
      e.preventDefault(); // prevent form submission
    }
  };
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name} {lastName}</h5>
          <p>{email}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <EventInfo icon={<FaEnvelope />} text={email} />
          <EventInfo icon={<FaMapMarkerAlt />} text={location} />
          <EventInfo icon={<FaUserShield />} text={role} />
        </div>

        <footer className="actions">
          <Link to={`../edit-user/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-user/${_id}`} >
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
