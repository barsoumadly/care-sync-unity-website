import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

function SkipLogin({ children }) {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        if (user.role === "CLINIC_ADMIN") navigate("/clinic/dashboard");
        else navigate(`/${user.role.toLowerCase()}/dashboard`);
      }
    },
    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) return children;
  return <Loader />;
}

export default SkipLogin;
