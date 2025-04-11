import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event";
import EventInfo from "./EventInfo";
import { Form } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Event= ({
  _id,
  eventTitle,
  eventDescription,
  eventType,
  eventDate,
  createdAt,
  eventStatus,
}) => {
  const date = day(eventDate).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icons">{eventTitle.charAt(0)}</div>
        <div className="info">
          <h5>{eventTitle}</h5>
          <p>{eventDescription}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <EventInfo icon={<FaCalendarAlt />} text={date} />
          <EventInfo icon={<FaBriefcase />} text={eventType} />
          <div className={`status status-${eventStatus.toLowerCase()}`}>{eventStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-event/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-event/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Event;
