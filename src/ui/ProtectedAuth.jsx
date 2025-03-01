import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedAuth({ children }) {
  const { isAuthenticated, isRegistered } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isRegistered) {
        if (!isAuthenticated) {
          navigate("/login");
        }
      }
    },
    [isAuthenticated, navigate]
  );

  if (isRegistered) return children;

  if (isAuthenticated) return children;
  return true;
}

export default ProtectedAuth;
