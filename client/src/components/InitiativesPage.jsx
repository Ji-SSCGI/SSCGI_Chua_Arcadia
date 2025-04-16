import React from "react";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

// Loader to fetch public partners
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/public-partners");
    return data.partners || [];
  } catch (error) {
    toast.error(error.response?.data?.msg || "An error occurred.");
    return [];
  }
};

const InitiativesPages = () => {
  const partners = useLoaderData();

  return (
    <main className="partners-container">
      {partners.map((partner) => (
        <div className="partner-card" key={partner.partnerName}>
          <div className="partner-header">
            <img
              src={partner.partnerImg}
              alt={partner.partnerName}
              className="partner-img"
            />
            <div className="partner-name">{partner.partnerName}</div>
          </div>
          <div className="partner-description">{partner.partnerDescription}</div>
        </div>
      ))}
    </main>
  );
};

export default InitiativesPages;