import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const isLogin = user === null;

  setTimeout(() => setIsLoading(false), 1000);

  useEffect(
    function () {
      if (isLoading && isLogin) {
        navigate("/login");
      }
    },
    [isLoading, isLogin, navigate]
  );

  if (isLoading) return <Loader />;
<<<<<<< Updated upstream
  if (!isLogin) return children;
=======
  return { children };
>>>>>>> Stashed changes
}

export default ProtectedRoute;
