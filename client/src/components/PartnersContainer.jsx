import React from "react";
import Partner from "./Partner"; // The component you created earlier
import Wrapper from "../assets/wrappers/EventsContainer"; // Reuse styles from events
import PageBtnContainer from "./PageBtnContainer"; // If paginated
import { useAllPartnersContext } from "../pages/AllPartners"; // You'll need a context like AllEvents

const PartnersContainer = () => {
  const { data } = useAllPartnersContext();
  
  const { partners, totalPartners, numOfPages } = data;
  if (partners.length === 0) {
    return (
      <Wrapper>
        <h2>No partners to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalPartners} Partner{partners.length > 1 && "s"} found
      </h5>
      <div className="partners">
        {partners.map((partner) => {
          return <Partner key={partner._id} {...partner} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default PartnersContainer;
