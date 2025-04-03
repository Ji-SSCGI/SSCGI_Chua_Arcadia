import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { EVENT_TYPE, EVENT_STATUS, EVENT_SORT_BY } from "../../../utils/constants";
import { useAllEventsContext } from "../pages/AllEvents";

const SearchContainer = () => {
  const { searchValues } = useAllEventsContext();
  const { search, eventStatus, eventType, sort } = searchValues;
  const submit = useSubmit();
  // DEBOUNCE ON SEARCH
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search Event</h5>
        <div className="form-center">
          {/* Search Position */}

          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            labelText=""
            name="eventStatus"
            defaultValue={eventStatus}
            list={["All", ...Object.values(EVENT_STATUS)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText=""
            name="eventType"
            defaultValue={eventType}
            list={["All", ...Object.values(EVENT_TYPE)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(EVENT_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <Link to="/dashboard/all-events" className="btn form-btn delete-btn">
            Reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
