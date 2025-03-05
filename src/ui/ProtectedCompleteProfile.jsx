import { useState } from "react";
import Loader from "./Loader";
import { LocalStorageState } from "../hooks/LocalStorageState";

function ProtectedCompleteProfile({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);
  LocalStorageState();

  if (isLoading) return <Loader />;
  return children;
}

export default ProtectedCompleteProfile;
