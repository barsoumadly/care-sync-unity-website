import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);

  useEffect(
    function () {
      if (isLoading && !isAuthenticated) {
        navigate("/login");
      }
    },
    [isLoading, isAuthenticated, navigate]
  );

  if (isLoading) return <Loader />;
  if (isAuthenticated) return children;
  return true;
}

export default ProtectedRoute;
