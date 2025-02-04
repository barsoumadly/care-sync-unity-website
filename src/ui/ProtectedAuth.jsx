import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useEffect } from "react";

function ProtectedAuth({ children }) {
  const { userEmail } = useUserContext();
  const navigate = useNavigate();

  const isLogin = userEmail === null;

  useEffect(
    function () {
      if (isLogin) {
        navigate("/forgot-password");
      }
    },
    [isLogin, navigate]
  );

  if (!isLogin) return children;
  return true;
}

export default ProtectedAuth;
