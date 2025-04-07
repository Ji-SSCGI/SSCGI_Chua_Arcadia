import React from "react";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { EVENT_STATUS, EVENT_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Action function to handle form submission and create a reservation
export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("eventImg");
  if (file && file.size > 500000) {
    toast.error("Image size too large.");
    return null;
  }
  try {
    // Send reservation data to backend
    const data = await customFetch.post("/events", formData);
    console.log(data);
    toast.success("Event added successfully.");
    return redirect("/dashboard/all-events"); // Redirect after successful reservation creation
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const AddEvent = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" encType="multipart/form-data" className="form">
        <h4 className="form-title">Add Event</h4>
        <div className="form-center">
          {/* Reference number will be auto-generated on the backend */}
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="eventImg"
              name="eventImg"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="eventTitle"
            labelText="Event Title"
            required
          />
          <FormRow
            type="text"
            name="eventDescription"
            labelText="Event Description"
            required
          />
          <FormRow
            type="text"
            name="registrationURL"
            labelText="Registration URL"
            required
          />
          <FormRowSelect
            labelText="Event Type"
            name="eventType"
            defaultValue={EVENT_TYPE.SEMINAR}
            list={Object.values(EVENT_TYPE)}
            required
          />
          <FormRowSelect
            labelText="Event Status"
            name="eventStatus"
            defaultValue={EVENT_STATUS.UPCOMING}
            list={Object.values(EVENT_STATUS)}
            required
          />
          <FormRow
            type="date"
            name="eventDate"
            labelText="Event Date"
            required
          />
          {/* Submit Button */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddEvent;
