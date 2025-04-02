import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSideBar, user } = useDashboardContext();
  const { role } = user;

  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link;

        // Show "Admin" link to both 'admin' and 'superAdmin' roles
        if (path === "admin" && (role === "admin" || role === "superAdmin")) {
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSideBar}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        }

        // Only show the "Create Account" link to users with 'superAdmin' role
        if (path === "create-account" && role === "superAdmin") {
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSideBar}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        }

        // Hide the "Create Account" link for non-superAdmins
        if (path !== "admin" && path !== "create-account") {
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSideBar}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        }

        return null; // Default fallback if no conditions match
      })}
    </div>
  );
};

export default NavLinks;
