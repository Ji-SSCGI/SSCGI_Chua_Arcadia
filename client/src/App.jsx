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
  Stats,
  Profile,
  Admin,
  CreateAccount,
} from "./pages";
import { toast } from "react-toastify";

// Import Action
import { action as loginAction } from "./pages/Login";
import { action as addEventAction } from "./pages/AddEvent";
import { action as createAccountAction } from "./pages/CreateAccount";

//import { action as editReservationAction } from "./pages/EditReservation";
//import { action as deleteReservationAction } from "./pages/DeleteReservation";
import { action as editProfileAction } from "./pages/Profile";

// Import Loader
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allEventsLoader } from "./pages/AllEvents";
//import { loader as editReservationLoader } from "./pages/EditReservation";
import { loader as adminLoader } from "./pages/Admin";
import { loader as statsLoader } from "./pages/Stats";

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
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
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
