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

  if (!isProfileCompleted)
    navigate(`/${user?.role?.toLowerCase().split("_")[0]}/complete-profile`);
  else if (type[1] === user?.role?.toLowerCase().split("_")[0]) {
    if (isAuthenticated) return children;
  } else {
    navigate(-1);
    return true;
  }

  return true;
}

export default ProtectedRoute;
