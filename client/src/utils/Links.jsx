import React from "react";
import { FaUserCircle, FaUsers, FaUserPlus, FaHandshake } from "react-icons/fa";
import { MdAdminPanelSettings, MdHandshake } from "react-icons/md";
import { MdEventAvailable, MdEventNote } from "react-icons/md";

const Links = [
  {
    text: "Add Event",
    path: ".",
    icon: <MdEventAvailable />,
  },
  {
    text: "All Events",
    path: "all-events",
    icon: <MdEventNote />,
  },
  {
    text: "Profile",
    path: "profile",
    icon: <FaUserCircle />,
  },
  {
    text: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
  {
    text: "All Users",
    path: "all-users",
    icon: <FaUsers />,
  },
  {
    text: "Create Account",
    path: "create-account",
    icon: <FaUserPlus />,
  },
  {
    text: "Add Partner",
    path: "add-partner",
    icon: <FaHandshake />,
  },
  {
    text: "All Partners",
    path: "all-partners",
    icon: <MdHandshake />,
  },
];  

export default Links;
