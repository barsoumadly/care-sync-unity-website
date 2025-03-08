import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function ProtectedCompleteProfile({ children }) {
  const { user, isProfileCompleted } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.pathname.split("/");

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;
  if (!isProfileCompleted)
    if (type[1] === user?.role?.toLowerCase().split("_")[0]) return children;
    else navigate(-1);
  else navigate(-1);
}

export default ProtectedCompleteProfile;
