import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isLogin = user === null;

  setTimeout(() => setIsLoading(false), 2000);

  useEffect(
    function () {
      if (isLoading && isLogin) {
        navigate("/login");
      }
    },
    [isLoading, isLogin, navigate]
  );

  if (isLoading) return <Loader />;
  if (!isLogin) return { children };
}

export default ProtectedRoute;
