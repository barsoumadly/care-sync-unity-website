import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import userRoleArr from "../data/constants";
import UserRole from "../features/authentication/UserRole";
import { register as registerApi } from "../services/auth";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const [userRole, setUserRole] = useState("PATIENT");

  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { saveEmail, userLogin } = useAuth();

  const onSubmit = async function (Udata) {
    setIsLoading(true);

    const { confirmPassword, ...userData } = Udata;

    if (userData.password !== confirmPassword) {
      return toast.error("Passwords are not same");
    }

    try {
      await registerApi(userData);
      toast.success("Successfull");
      navigate("/verify-email");
      setUserRole("PATIENT");
      saveEmail(userData.email);
      userLogin(userData);
    } catch (error) {
      if (error.message === "Network Error") {
        return navigate("/internal-server-error");
      }
      if (error.status === 500) {
        return toast.error("Password must be at least 8 characters");
      }
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handlePasswordEye1 = function (result) {
    setIsEyeOpen1(result);
  };

  const handlePasswordEye2 = function (result) {
    setIsEyeOpen2(result);
  };

  const handleUserRole = function (userRole) {
    setUserRole(userRole);
  };

  return (
    <>
      <h2>Getting Started</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <label>
            Full Name <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            required
            {...register("name")}
          />
        </div>

        <div className="input-block">
          <label>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            required
            {...register("email")}
          />
        </div>

        <div className="input-block">
          <label>
            Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen1 ? "text" : "password"}`}
            required
            {...register("password")}
          />
          <PasswordEye
            isEyeOpen={isEyeOpen1}
            setIsEyeOpen={handlePasswordEye1}
          />
        </div>

        <div className="input-block">
          <label>
            Confirm Password
            <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input-confirm"
            type={`${isEyeOpen2 ? "text" : "password"}`}
            required
            {...register("confirmPassword")}
          />
          <PasswordEye
            isEyeOpen={isEyeOpen2}
            setIsEyeOpen={handlePasswordEye2}
          />
        </div>

        <UserRole
          userRoleArr={userRoleArr.slice().splice(0, 4)}
          userRole={userRole}
          setUserRole={handleUserRole}
        />

        {/* {isVisible && <ErrorMessage errorMessage={errorMessage} />} */}
        <AuthButton text="Sign up" isLoading={isLoading} />
      </form>
      {/* <!-- /Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
