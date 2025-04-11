import React from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { USER_ROLE } from "../../../utils/constants";
import {
  useLoaderData,
  useParams,
  Form,
  useNavigation,
  redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/${params.id}`);
    console.log(data);

    return { user: data };
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return redirect("/dashboard/all-users");
  }
};

// Action for updating the event
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/users/${params.id}`, data); // Send updated data to API
    toast.success("User updated successfully");
    return redirect("/dashboard/all-users");
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong");
    return error;
  }
};

// EditEvent Component
const EditEvent = () => {
  const { user } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit User</h4>
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={user.user.name} />
          <FormRow
            type="text"
            name="lastName"
            defaultValue={user.user.lastName}
          />
          <FormRowSelect
            labelText="Role"
            name="role"
            defaultValue={user.user.role}
            list={Object.values(USER_ROLE)}
            required
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
