import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

function SkipLogin({ children }) {
  const { user, isAuthenticated, isProfileCompleted, isRegistered } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate(
          `/${user?.role?.toLowerCase().split("_")[0]}/${
            isProfileCompleted ? "dashboard" : "complete-profile"
          }`
        );
      }
    },

    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) return children;
  return <Loader />;
}

export default SkipLogin;
