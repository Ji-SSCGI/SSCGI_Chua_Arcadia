import React from "react";
import User from "./User"; // The component you created earlier
import Wrapper from "../assets/wrappers/EventsContainer"; // Reuse styles from events
import PageBtnContainer from "./PageBtnContainer"; // If paginated
import { useAllUsersContext } from "../pages/AllUsers"; // You'll need a context like AllEvents

const UsersContainer = () => {
  const { data } = useAllUsersContext();
  
  const { users, totalUsers, numOfPages } = data;
  if (users.length === 0) {
    return (
      <Wrapper>
        <h2>No users to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalUsers} User{users.length > 1 && "s"} found
      </h5>
      <div className="users">
        {users.map((user) => {
          return <User key={user._id} {...user} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default UsersContainer;
