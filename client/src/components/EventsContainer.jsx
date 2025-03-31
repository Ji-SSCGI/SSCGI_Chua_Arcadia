import React from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useAllReservationContext } from "../pages/AllReservations.jsx";

const EventsContainer = () => {
  const { data } = useAllReservationContext();
  const { jobs, totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No events to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} Event{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default EventsContainer;
