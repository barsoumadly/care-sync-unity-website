import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useLocation, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isAuthenticated, isProfileCompleted } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.pathname.split("/");

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;

  if (!isProfileCompleted && isProfileCompleted !== null)
    navigate(`/${user?.role?.toLowerCase().split("_")[0]}/complete-profile`);
  else if (isAuthenticated) {
    if (type[1] === user?.role?.toLowerCase().split("_")[0]) return children;
    else {
      navigate(0);
      navigate(`/${user?.role?.toLowerCase().split("_")[0]}/dashboard`);
    }
  }

  return true;
}

export default ProtectedRoute;
