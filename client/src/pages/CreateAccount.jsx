import React from "react";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { USER_ROLE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Action function to handle form submission and create a reservation
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // Send reservation data to backend
    await customFetch.post("/auth/register", data);
    toast.success("User account created successfully.");
    return redirect("/dashboard/create-account"); // Redirect after successful reservation creation
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const CreateAccount = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Account</h4>
        <div className="form-center">
          {/* Reference number will be auto-generated on the backend */}
          <FormRow type="text" name="name" labelText="Name" required />
          <FormRow type="text" name="lastName" labelText="Lastname" required />
          <FormRow
            type="email"
            name="email"
            labelText="Email Address"
            required
          />
          <FormRow
            type="password"
            name="password"
            labelText="password"
            required
          />
          <FormRowSelect
            labelText="Role"
            name="role"
            defaultValue={USER_ROLE.ADMIN}
            list={Object.values(USER_ROLE)}
            required
          />
          <FormRow type="text" name="location" labelText="Location" required />
          {/* Submit Button */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default CreateAccount;
