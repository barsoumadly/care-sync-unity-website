import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedCompleteProfile({ children }) {
  const { isProfileCompleted } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;
  if (!isProfileCompleted) return children;
  else navigate(-1);
}

export default ProtectedCompleteProfile;
