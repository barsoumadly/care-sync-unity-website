import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./ui/DashboardLayout";
import Patient from "./features/user/patient";
import Doctor from "./features/user/Doctor";
import Clinic from "./features/user/Clinic";
import Loader from "./ui/Loader";
import Error from "./ui/Error";
import Home from "./ui/Home";
import AuthenticationLayout from "./ui/AuthenticationLayout";
import Register from "./pages/Register";
import Login from "./pages/login";
import ForgotPassword from "./features/authentication/ForgotPassword";
import ResetPassword from "./features/authentication/ResetPassword";
import { useState } from "react";

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
      { path: "/patient", element: <Patient /> },
      { path: "/doctor", element: <Doctor /> },
      { path: "/clinic", element: <Clinic /> },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);
  return (
    <div>{isLoading ? <Loader /> : <RouterProvider router={router} />}</div>
  );
}

export default App;
