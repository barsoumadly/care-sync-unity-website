import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;
  if (isAuthenticated) return children;
  return true;
}

export default ProtectedRoute;
