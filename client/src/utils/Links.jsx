import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdPeople } from "react-icons/md";

const Links = [
  {
    text: "Add Event",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "All Events",
    path: "all-events",
    icon: <FaWpforms />,
  },
  {
    text: "Profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
  {
    text: "Create Account",
    path: "create-account",
    icon: <MdPeople />,
  },
];  

export default Links;
