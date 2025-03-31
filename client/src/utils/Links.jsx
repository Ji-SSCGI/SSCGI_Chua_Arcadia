import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const Links = [
  {
    text: "Add Reservation",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "All Reservations",
    path: "all-reservations",
    icon: <MdQueryStats />,
  },
  {
    text: "Stats",
    path: "stats",
    icon: <IoBarChartSharp />,
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
];

export default Links;
