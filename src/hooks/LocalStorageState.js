import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LocalStorageState() {
  const navigate = useNavigate();
  const { userLogin } = useAuth();
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("key"));
    if (isAuth === null) {
      navigate("/login");
    } else {
      userLogin(isAuth);
    }
  }, []);
}
