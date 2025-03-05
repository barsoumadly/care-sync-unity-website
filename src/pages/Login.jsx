import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import { login, requestEmailVerification } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, reset } = useForm();

  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const isProfileCompleted = false;
  const { userLogin } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  // const showCompleteProfile = function (userRole) {
  //   navigate(`/${userRole.toLowerCase().split("_")[0]}/complete-profile`);
  // };

  // const navigateUser = function (userRole) {
  //   console.log(isProfileCompleted);

  //   if (!isProfileCompleted) showCompleteProfile(userRole);
  //   else {
  //     navigate(`/${userRole.toLowerCase().split("_")[0]}/dashboard`, {
  //       replace: true,
  //     });
  //   }
  // };

  const changeButton = function () {
    setIsLogin(false);
  };

  const onSubmit = async function (data) {
    setIsLoading(true);

    try {
      if (isLogin) {
        const response = await login(data);
        userLogin(response?.data.user, response.data.token);
        // navigateUser(response?.data.user.role);
        toast(`Welcome ${response.data.user.name}`, {
          icon: "👋",
        });
      } else {
        const email = data?.email;
        userLogin({ email });
        await requestEmailVerification({ email });
        navigate("/verify-email");
        toast.success("OTP Code is sent");
      }
    } catch (error) {
      console.log(error);

      if (error.message === "Network Error") {
        return navigate("/internal-server-error");
      }
      if (error.response.data.message === "Please verify your email to login")
        changeButton();
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handlePasswordEye = function (result) {
    setIsEyeOpen(result);
  };

  return (
    <>
      <h2>{isLogin ? "Login" : "Verify Email"}</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <label style={{ background: `${isLoading ? "none" : "#ffffff"}` }}>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            required
            disabled={isLoading}
            {...register("email")}
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
                required
                disabled={isLoading}
                {...register("password")}
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
