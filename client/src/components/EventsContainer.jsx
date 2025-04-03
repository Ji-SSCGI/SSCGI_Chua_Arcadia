import React from "react";
import Event from "./Event";
import Wrapper from "../assets/wrappers/EventsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useAllEventsContext } from "../pages/AllEvents";

const EventsContainer = () => {
  const { data } = useAllEventsContext();
  const { events, totalEvents, numOfPages } = data;
  if (events.length === 0) {
    return (
      <Wrapper>
        <h2>No events to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalEvents} Event{events.length > 1 && "s"} found
      </h5>
      <div className="events">
        {events.map((event) => {
          return <Event key={event._id} {...event} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default EventsContainer;
