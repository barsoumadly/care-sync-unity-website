import { Outlet } from "react-router-dom";
import AuthenticationFrame from "../features/authentication/AuthenticationFrame";
import SkipLogin from "../features/authentication/SkipLogin";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getUserById } from "../services/auth";

function AuthenticationLayout() {
  const { userLogin } = useAuth();

  useEffect(() => {
    const getUser = async function (isAuth) {
      try {
        const response = await getUserById(isAuth);
        userLogin(response.data.user, isAuth);
      } catch (error) {
        console.error(error);
      }
    };

    let isAuth = JSON.parse(localStorage.getItem("key"));
    if (isAuth !== null) {
      getUser(isAuth);
    }
  }, []);

  return (
    <SkipLogin>
      <AuthenticationFrame>
        <Outlet />
      </AuthenticationFrame>
    </SkipLogin>
  );
}

export default AuthenticationLayout;
