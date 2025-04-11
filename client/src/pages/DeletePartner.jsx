import React from 'react'
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
    try {
      await customFetch.delete(`/partners/${params.id}`);
      toast.success("Partner deleted successfully");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    return redirect("/dashboard/all-partners");
  }

const DeletePartner = () => {
  return (
    <div>DeletePartner</div>
  )
}

export default DeletePartner
