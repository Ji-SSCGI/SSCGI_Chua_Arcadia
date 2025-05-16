import React, { useState } from "react";
import { FaEnvelope, FaUserAlt, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event"; // We can reuse this wrapper for styling
import EventInfo from "./EventInfo"; // Reuse EventInfo for consistent info display
import { Form } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch"; // Your fetch utility

const User = ({
  _id,
  name,
  email,
  lastName,
  location,
  role,
}) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility


  // Close the modal
  const handleClose = () => setShowModal(false);

  // Show the modal
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  // Delete the event
  const handleDelete = async () => {
    try {
      const data = await customFetch.delete(`/users/${_id}`);
      console.log(data);
      
      toast.success("User deleted successfully");
      handleClose();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error deleting user");
    }
    navigate("/dashboard/all-users");
  };

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
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
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

export default User;
