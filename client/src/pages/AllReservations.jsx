import React from "react";
import { toast } from "react-toastify";
import { EventsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllReservationContext = createContext();

const AllReservations = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllReservationContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <EventsContainer />
    </AllReservationContext.Provider>
  );
};

export const useAllReservationContext = () => useContext(AllReservationContext);
export default AllReservations;
