import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Events,
  Publications,
  Login,
  Register,
  DashboardLayout,
  Error,
  AllReservations,
  AddReservation,
  EditReservation,
  Stats,
  Profile,
  Admin,
} from "./pages";
import { toast } from "react-toastify";

// Import Action
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addReservationAction } from "./pages/AddReservation";
import { action as editReservationAction } from "./pages/EditReservation";
import { action as deleteReservationAction } from "./pages/DeleteReservation";
import { action as editProfileAction } from "./pages/Profile";

// Import Loader
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allReservationLoader } from "./pages/AllReservations";
import { loader as editReservationLoader } from "./pages/EditReservation";
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
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddReservation />,
            action: addReservationAction,
          },
          {
            path: "all-reservations",
            element: <AllReservations />,
            loader: allReservationLoader,
          },
          {
            path: "edit-reservation/:id",
            element: <EditReservation />,
            loader: editReservationLoader,
            action: editReservationAction,
          },
          { path: "delete-reservation/:id", action: deleteReservationAction },
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
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
