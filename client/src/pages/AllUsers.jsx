import React, { useContext, createContext } from "react";
import { toast } from "react-toastify";
import { UsersContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

// Loader function to fetch all users
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // Fetch users data from the backend
    const { data } = await customFetch.get("/users", { params });
    
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
const AllUsersContext = createContext();

// Component for displaying all users
const AllUsers = () => {
  const { data } = useLoaderData();

  return (
    <AllUsersContext.Provider value={{ data }}>
      <UsersContainer />
    </AllUsersContext.Provider>
  );
};

// Custom hook to use the context in other components
export const useAllUsersContext = () => useContext(AllUsersContext);

export default AllUsers;
