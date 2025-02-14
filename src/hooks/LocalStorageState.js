import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserById } from "../services/auth";

export function LocalStorageState() {
  const navigate = useNavigate();
  const { userLogin } = useAuth();
  useEffect(() => {
    const getUser = async function (isAuth) {
      try {
        const response = await getUserById(isAuth);
        userLogin(response.data.user, isAuth);
      } catch (error) {
        navigate("/internal-server-error");
      }
    };

    let isAuth = JSON.parse(localStorage.getItem("key"));
    if (isAuth === null) {
      navigate("/login");
    } else {
      getUser(isAuth);
    }
  }, []);
}
