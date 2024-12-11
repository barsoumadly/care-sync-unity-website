import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./features/ui/DashboardLayout";
import Patient from "./features/user/patient";
import Clinic from "./features/user/Clinic";
import Error from "./features/ui/Error";
import Home from "./features/ui/Home";
import AuthenticationLayout from "./features/authentication/AuthenticationLayout";
import Register from "./features/authentication/Register";
import Login from "./features/authentication/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    element: <AuthenticationLayout />,
    errorElement: <Error />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
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
