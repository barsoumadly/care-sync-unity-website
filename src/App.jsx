import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./features/ui/DashboardLayout";
import Login from "./features/authentication/Login";
import Register from "./features/authentication/Register";
import Patient from "./features/user/patient";
import Clinic from "./features/user/Clinic";
import Error from "./features/ui/Error";
import Home from "./features/ui/Home";
import "../public/styles/style.css";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
  {
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { path: "/dashboard/patient", element: <Patient /> },
      { path: "/dashboard/clinic", element: <Clinic /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
