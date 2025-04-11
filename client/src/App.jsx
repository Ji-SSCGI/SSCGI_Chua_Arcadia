import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Events,
  Publications,
  Initiatives,
  Login,
  DashboardLayout,
  Error,
  AddEvent,
  AllEvents,
  DeleteEvent,
  Profile,
  Admin,
  AllUsers,
  EditUser,
  CreateAccount,
  AddPartner,
  AllPartners,
EditPartner,
DeletePartner,
} from "./pages";
import { toast } from "react-toastify";
import EventsPage from "./components/EventsPage";

// Import Action
import { action as contactAction } from "./components/LandingMain";
import { action as loginAction } from "./pages/Login";
import { action as addEventAction } from "./pages/AddEvent";
import { action as createAccountAction } from "./pages/CreateAccount";

import { action as editEventAction } from "./pages/EditEvent";
import { action as deleteEventAction } from "./pages/DeleteEvent";
import { action as editUserAction } from "./pages/EditUser";
import { action as editPartnerAction } from "./pages/EditPartner";
import { action as deleteUserAction } from "./pages/DeleteUser";

import { action as editProfileAction } from "./pages/Profile";
import { action as addPartnerAction } from "./pages/AddPartners";
import { action as deletePartnerAction } from "./pages/DeletePartner";

// Import Loader
//import { loader as eventPageLoader } from "./components/EventsPage";
import { loader as eventPageLoader } from "./components/EventsPage";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allEventsLoader } from "./pages/AllEvents";
import { loader as editEventLoader } from "./pages/EditEvent";
import { loader as editUserLoader } from "./pages/EditUser";
import { loader as allUsersLoader } from "./pages/AllUsers";
import { loader as adminLoader } from "./pages/Admin";
import { loader as allPartnersLoader } from "./pages/AllPartners";
import { loader as editPartnerLoader } from "./pages/EditPartner";


import EditEvent from "./pages/EditEvent";

//Dark Theme Enabled
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/jobs");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        action: contactAction,
      },
      {
        path: "events",
        element: <Events />,
        loader: eventPageLoader,
      },
      {
        path: "publications",
        element: <Publications />,
      },
      {
        path: "initiatives",
        element: <Initiatives />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddEvent />,
            action: addEventAction,
          },
          {
            path: "all-events",
            element: <AllEvents />,
            loader: allEventsLoader,
          },
          {
            path: "edit-event/:id",
            element: <EditEvent />,
            loader: editEventLoader,
            action: editEventAction,
          },
          { path: "delete-event/:id",
             action: deleteEventAction },
          {
            path: "profile",
            element: <Profile />,
            action: editProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "all-users",
            element: <AllUsers />,
            loader: allUsersLoader,
          },
          {
            path: "edit-user/:id",
            element: <EditUser />,
            loader: editUserLoader,
            action: editUserAction,
          },
          {
            path: "create-account",
            element: <CreateAccount />,
            action: createAccountAction,
          },
          {
            path: "add-partner",
            element: <AddPartner />,
            action: addPartnerAction,
          },
          {
            path: "all-partners",
            element: <AllPartners />,
            loader: allPartnersLoader,
          },
          {
            path: "edit-partner/:id",
            element: <EditPartner />,
            loader: editPartnerLoader,
            action: editPartnerAction,
          },
          
          { path: "delete-partner/:id",
            action: deletePartnerAction },
          { path: "delete-user/:id",
            action: deleteUserAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
