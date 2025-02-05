import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedAuth({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
  return true;
}

export default ProtectedAuth;
