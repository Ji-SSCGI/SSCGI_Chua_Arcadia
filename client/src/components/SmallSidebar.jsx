import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Links from "../utils/Links";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSideBar } = useDashboardContext(); // Update to toggleSideBar
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={toggleSideBar} // Correct function to toggle sidebar
          >
            <FaTimes />
          </button>
          <header>{/*<Logo />*/}</header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
