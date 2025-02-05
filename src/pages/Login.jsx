import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import { useUserContext } from "../context/UserContextProvider";
import { login } from "../services/auth";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const showCompleteProfile = function (userRole, isProfileCompleted) {
    if (userRole === "CLINIC_ADMIN" && !isProfileCompleted) {
      navigate("/clinic/complete-profile");
    } else if (userRole === "PHARMACY_ADMIN" && !isProfileCompleted) {
    }
  };

  const navigateUser = function (userRole, isProfileCompleted = false) {
    // if (!isProfileCompleted)
    //   return showCompleteProfile(userRole, isProfileCompleted);

    if (userRole === "CLINIC_ADMIN") {
      navigate("/clinic/dashboard", { replace: true });
    } else if (userRole === "PHARMACY_ADMIN") {
      navigate("/pharmacy/dashboard", { replace: true });
    } else if (userRole === "LABORATORY_ADMIN") {
      navigate("/laboratory/dashboard", { replace: true });
    } else if (userRole === "PATIENT") {
      navigate("/patient/dashboard", { replace: true });
    } else if (userRole === "DOCTOR") {
      navigate("/doctor/dashboard", { replace: true });
    }
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setIsLoading(true);

    const userCredentials = { email, password };
    try {
      const response = await login(userCredentials);
      setUser(response?.data.user);
      navigateUser(response?.data.user.role);
      toast(`Welcome ${response.data.user.name}`, {
        icon: "👋",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordEye = function (result) {
    setIsEyeOpen(result);
  };

  return (
    <>
      <h2>Login</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-block">
          <label>
            Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen ? "text" : "password"}`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <PasswordEye isEyeOpen={isEyeOpen} setIsEyeOpen={handlePasswordEye} />
        </div>

        <div className="forgotpass">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <AuthButton text="Login" isLoading={isLoading} />
      </form>
      {/* <!-- Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Need an account test? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
