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
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Loader to fetch event data by ID
export const loader = async ({ params }) => {
  try {
    // Make sure you're hitting the correct endpoint
    const { data } = await customFetch.get(`/partners/${params.id}`);

    console.log(data);
    // Return the event data, it will be accessible in the EditEvent component
    return { partner: data }; // Wrap the event data in an object
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return redirect("/dashboard/all-partners"); // Redirect to the all events page if something goes wrong
  }
};

// Action for updating the partners
export const action = async ({ request}) => {
  const formData = await request.formData();
  
  try {
    await customFetch.patch(`/partners/${params.id}`, data); // Send updated data to API
    toast.success("Partner updated successfully");
    return redirect("/dashboard/all-partners");
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return error;
  }
};

// EditEvent Component
const EditPartner = () => {
  const { partner } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit Partners</h4>
        <div className="form-center">
        <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="partnerImg"
              name="partnerImg"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="partnerName"
            defaultValue={partner.partner.partnerName} 
          />
          <FormRow
            type="text"
            name="partnerDescription"
            defaultValue={partner.partner.partnerDescription} 
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

export default EditPartner;
