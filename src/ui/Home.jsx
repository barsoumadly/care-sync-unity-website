import { Link } from "react-router-dom";
import { LocalStorageState } from "../hooks/LocalStorageState";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserById } from "../services/auth";

function Home() {
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
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
