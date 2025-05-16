import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Event";
import EventInfo from "./EventInfo";
import { Form, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal
import customFetch from "../utils/customFetch"; // Your fetch utility
import { toast } from "react-toastify";

const Partner = ({ _id, partnerName, partnerDescription, partnerImg }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Close the modal
  const handleClose = () => setShowModal(false);

  // Show the modal
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  // Delete the event
  const handleDelete = async () => {
    try {
      await customFetch.delete(`/partners/${_id}`);
      toast.success("Partner deleted successfully");
      handleClose();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error deleting partner");
    }
    navigate("/dashboard/all-partners");
  };

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
                <Modal.Title>Delete Partner</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this partner?</Modal.Body>
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

export default Partner;
