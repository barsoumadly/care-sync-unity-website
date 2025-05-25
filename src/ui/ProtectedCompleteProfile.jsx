import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function ProtectedCompleteProfile({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  LocalStorageState();

  const type = location.pathname.split("/");
  setTimeout(() => setIsLoading(false), 1000);

  console.log("ProtectedCompleteProfile", user);
  if (isLoading) return <Loader />;

  if (!user?.profileCompleted && user?.profileCompleted !== null) {
    if (type[1] === user?.role?.toLowerCase().split("_")[0]) return children;
    else if (user) {
      navigate(`/${user?.role?.toLowerCase().split("_")[0]}/complete-profile`);
    }
  } else {
    navigate(`/${user?.role?.toLowerCase().split("_")[0]}/dashboard`);
  }
  return true;
}

export default ProtectedCompleteProfile;
