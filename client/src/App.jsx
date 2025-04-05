import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Events,
  Publications,
  Login,
  DashboardLayout,
  Error,
  AddEvent,
  AllEvents,
  DeleteEvent,
  Profile,
  Admin,
  CreateAccount,
} from "./pages";
import { toast } from "react-toastify";
import EventsPage from "./components/EventsPage";

// Import Action
import { action as loginAction } from "./pages/Login";
import { action as addEventAction } from "./pages/AddEvent";
import { action as createAccountAction } from "./pages/CreateAccount";

import { action as editEventAction } from "./pages/EditEvent";
import { action as deleteEventAction } from "./pages/DeleteEvent";
import { action as editProfileAction } from "./pages/Profile";

// Import Loader
//import { loader as eventPageLoader } from "./components/EventsPage";
import { loader as eventPageLoader } from "./components/EventsPage";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allEventsLoader } from "./pages/AllEvents";
import { loader as editEventLoader } from "./pages/EditEvent";
import { loader as adminLoader } from "./pages/Admin";
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
            path: "create-account",
            element: <CreateAccount />,
            action: createAccountAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
