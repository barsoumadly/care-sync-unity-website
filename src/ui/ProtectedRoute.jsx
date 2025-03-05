import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isAuthenticated, isProfileCompleted } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;
  if (!isProfileCompleted)
    navigate(`/${user?.role?.toLowerCase().split("_")[0]}/complete-profile`);
  else if (isAuthenticated) return children;
  return true;
}

export default ProtectedRoute;
