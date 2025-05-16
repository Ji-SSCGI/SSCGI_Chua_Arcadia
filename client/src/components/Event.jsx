import React, { useState } from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event";
import EventInfo from "./EventInfo";
import { Form, useNavigate} from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal
import customFetch from "../utils/customFetch"; // Your fetch utility
import { toast } from "react-toastify";

day.extend(advancedFormat);

const Event = ({
  _id,
  eventTitle,
  eventDescription,
  eventType,
  eventDate,
  createdAt,
  eventStatus,
}) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const date = day(eventDate).format("MMM Do, YYYY");

  // Close the modal
  const handleClose = () => setShowModal(false);

  // Show the modal
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  // Delete the event
  const handleDelete = async () => {
    try {
      await customFetch.delete(`/events/${_id}`);
      toast.success("Event deleted successfully");
      handleClose();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error deleting event");
    }
    navigate("/dashboard/all-events");
  };

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
          <div className={`status status-${eventStatus.toLowerCase()}`}>
            {eventStatus}
          </div>
        </div>

        <footer className="actions">
          <Link to={`../edit-event/${_id}`} className="btn edit-btn">
            Edit
          </Link>

          {/* Trigger the Modal */}
          <button
            type="button"
            className="btn delete-btn"
            onClick={handleShow} 
          >
            Delete
          </button>
        </footer>
      </div>

      {/* Modal for Confirmation */}
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this event?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Event;
