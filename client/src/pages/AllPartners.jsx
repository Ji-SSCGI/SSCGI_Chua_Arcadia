import React, { useContext, createContext } from "react";
import { toast } from "react-toastify";
import { PartnersContainer } from "../components"; // 
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

// Loader function to fetch all partners
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // Fetch users data from the backend
    const { data } = await customFetch.get("/partners", { params });
    console.log(data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response?.data?.msg || "An error occurred.");
    return error;
  }
};

// Context for managing user data
const AllPartnersContext = createContext();

// Component for displaying all partner
const AllPartners = () => {
  const { data } = useLoaderData();

  return (
    <AllPartnersContext.Provider value={{ data }}>
      <PartnersContainer />
    </AllPartnersContext.Provider>
  );
};

// Custom hook to use the context in other components
export const useAllPartnersContext = () => useContext(AllPartnersContext);

export default AllPartners;