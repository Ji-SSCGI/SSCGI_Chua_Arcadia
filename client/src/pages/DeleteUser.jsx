import React from 'react'
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
    try {
      await customFetch.delete(`/users/${params.id}`);
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    return redirect("/dashboard/all-users");
  }

const DeleteUser = () => {
  return (
    <div>DeleteUser</div>
  )
}

export default DeleteUser
