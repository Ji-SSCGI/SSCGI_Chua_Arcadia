import React from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {
  useLoaderData,
  useParams,
  Form,
  useNavigation,
  redirect,
} from "react-router-dom";
import { EVENT_STATUS, EVENT_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Loader to fetch event data by ID
export const loader = async ({ params }) => {
  try {
    // Make sure you're hitting the correct endpoint
    const { data } = await customFetch.get(`/events/${params.id}`);

    console.log(data);
    // Return the event data, it will be accessible in the EditEvent component
    return { event: data }; // Wrap the event data in an object
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return redirect("/dashboard/all-events"); // Redirect to the all events page if something goes wrong
  }
};

// Action for updating the event
export const action = async ({ request}) => {
  const formData = await request.formData();
  
  try {
    await customFetch.patch(`/events/${params.id}`, data); // Send updated data to API
    toast.success("Event updated successfully");
    return redirect("/dashboard/all-events");
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return error;
  }
};

// EditEvent Component
const EditEvent = () => {
  const { event } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit Event</h4>
        <div className="form-center">
          {/* Form fields with default values from event data */}
          <FormRow
            type="text"
            name="eventTitle"
            defaultValue={event.event.eventTitle} 
          />
          <FormRow
            type="text"
            name="eventDescription"
            defaultValue={event.event.eventDescription} 
          />
          <FormRow
            type="text"
            name="registrationURL"
            defaultValue={event.event.registrationURL}
          />
          <FormRowSelect
            name="eventStatus"
            labelText="Event Status"
            className="eventStatus"
            defaultValue={event.event.eventStatus}
            list={Object.values(EVENT_STATUS)}
          />
          <FormRowSelect
            name="eventType"
            labelText="Event Type"
            defaultValue={event.event.eventType} 
            list={Object.values(EVENT_TYPE)} 
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditEvent;
