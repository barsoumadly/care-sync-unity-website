import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import userRoleArr from "../data/constants";
import { register as registerApi } from "../services/auth";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();

  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const userRoleArray = userRoleArr.slice().splice(0, 4);
  const { saveEmail, userRegister } = useAuth();
  const { errors } = formState;

  const onSubmit = async function (Udata) {
    setIsLoading(true);

    const { confirmPassword, ...userData } = Udata;

    try {
      await registerApi(userData);
      toast.success("Successfull");
      saveEmail(userData.email);
      userRegister(userData);
      navigate("/verify-email");
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
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors?.name && (
            <span className="error-message ">{errors?.name?.message}</span>
          )}
        </div>

        <div className="input-block">
          <label>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            {...register("email", {
              required: "This field is required",
            })}
          />{" "}
          {errors?.email && (
            <span className="error-message ">{errors?.email?.message}</span>
          )}
        </div>

        <div className="input-block">
          <label>
            Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen1 ? "text" : "password"}`}
            {...register("password", {
              required: "This field is required",
            })}
          />
          <PasswordEye
            isEyeOpen={isEyeOpen1}
            setIsEyeOpen={handlePasswordEye1}
          />{" "}
          {errors?.password && (
            <span className="error-message ">{errors?.password?.message}</span>
          )}
        </div>

        <div className="input-block">
          <label>
            Confirm Password
            <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input-confirm"
            type={`${isEyeOpen2 ? "text" : "password"}`}
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords are not same",
            })}
          />
          <PasswordEye
            isEyeOpen={isEyeOpen2}
            setIsEyeOpen={handlePasswordEye2}
          />{" "}
          {errors?.confirmPassword && (
            <span className="error-message ">
              {errors?.confirmPassword?.message}
            </span>
          )}
        </div>

        <div className="input-block">
          <label>
            User Role
            <span className="login-danger">*</span>
          </label>
          <select
            className="form-control pass-input"
            {...register("role", {
              required: "This field is required",
            })}
          >
            {userRoleArray.map((role) => (
              <option value={role.key} key={role.key}>
                {role.value}
              </option>
            ))}
          </select>{" "}
          <span className="error-message ">{errors?.role?.message}</span>
        </div>

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
