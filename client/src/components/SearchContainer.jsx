import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search form</h5>
        <div className="form-center">
          {/* Search Position */}

          <FormRow type="search" name="search" defaultValue="" />
          <FormRowSelect
            labelText=""
            name="jobStatus"
            list={["All", ...Object.values(JOB_STATUS)]}
            defaultValue="All"
          />
          <FormRowSelect
            labelText=""
            name="jobType"
            list={["All", ...Object.values(JOB_TYPE)]}
            defaultValue="All"
          />
          <FormRowSelect
            name="sort"
            defaultValue="Newest"
            list={[...Object.values(JOB_SORT_BY)]}
          />

          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset
          </Link>
          {/* Temp */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
