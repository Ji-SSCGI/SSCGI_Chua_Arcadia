import React from "react";
import { toast } from "react-toastify";
import { EventsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

// Loader function to fetch all reservations
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // Fetch reservations data from the backend
    const { data } = await customFetch.get("/events", {
      params, // Send query parameters (like search, filters, etc.)
    });

    // Return the fetched data and any search parameters
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response?.data?.msg || "An error occurred.");
    return error;
  }
};

// Context for managing reservation data
const AllEventsContext = createContext();

// Component for displaying all reservations
const AllEvents = () => {
  const { data, searchValues } = useLoaderData(); // Get data and searchValues from loader

  return (
    <AllEventsContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
        <EventsContainer />
    </AllEventsContext.Provider>
  );
};


// Custom hook to use the context in other components
export const useAllEventsContext = () => useContext(AllEventsContext);

export default AllEvents;
