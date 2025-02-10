import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import { login, requestEmailVerification } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { saveEmail, userLogin } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

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

  const changeButton = function () {
    setIsLogin(false);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setIsLoading(true);

    const userCredentials = { email, password };
    try {
      if (isLogin) {
        const response = await login(userCredentials);
        userLogin(response?.data.user);
        navigateUser(response?.data.user.role);
        toast(`Welcome ${response.data.user.name}`, {
          icon: "👋",
        });
      } else {
        const user = { email };
        userLogin(user);
        await requestEmailVerification({ email });
        navigate("/verify-email");
        toast.success("OTP Code is sent");
      }
    } catch (error) {
      if (error.response.data.message === "Please verify your email to login")
        changeButton();
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
      <h2>{isLogin ? "Login" : "Verify Email"}</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label style={{ background: `${isLoading ? "none" : "#ffffff"}` }}>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        {isLogin && (
          <>
            <div className="input-block">
              <label
                style={{ background: `${isLoading ? "none" : "#ffffff"}` }}
              >
                Password <span className="login-danger">*</span>
              </label>
              <input
                className="form-control pass-input"
                type={`${isEyeOpen ? "text" : "password"}`}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={isLoading}
              />
              <PasswordEye
                isEyeOpen={isEyeOpen}
                setIsEyeOpen={handlePasswordEye}
              />
            </div>

            <div className="forgotpass">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </>
        )}
        <AuthButton
          text={isLogin ? "Login" : "Send Verification Code"}
          isLoading={isLoading}
        />
      </form>
      {/* <!-- Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
