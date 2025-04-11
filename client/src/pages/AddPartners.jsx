
import React from "react";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Action function to handle form submission and create a reservation
export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("partnerImg");
  if (file && file.size > 500000) {
    toast.error("Image size too large.");
    return null;
  }
  try {
    // Send reservation data to backend
    const data = await customFetch.post("/partners", formData);
    toast.success("Partner added successfully.");
    return redirect("/dashboard/all-partners"); // Redirect after successful reservation creation
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const AddPartners = () => {
  const { partner } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" encType="multipart/form-data" className="form">
        <h4 className="form-title">Add partner</h4>
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
            labelText="Partner Name"
            required
          />
          <FormRow
            className="partner-description"
            type="text"
            name="partnerDescription"
            labelText="Partner Description"
            required
          />
          {/* Submit Button */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddPartners;
