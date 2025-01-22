import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./ui/DashboardLayout";
import Patient from "./features/user/patient";
import Clinic from "./features/user/Clinic";
import Error from "./ui/Error";
import Home from "./ui/Home";
import AuthenticationLayout from "./features/authentication/AuthenticationLayout";
import Register from "./features/authentication/Register";
import Login from "./features/authentication/Login";
import ForgotPassword from "./features/authentication/ForgotPassword";
import ResetPassword from "./features/authentication/ResetPassword";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    element: <AuthenticationLayout />,
    errorElement: <Error />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
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
