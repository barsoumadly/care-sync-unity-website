import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const { saveEmail } = useAuth();

  const onSubmit = async function (data) {
    const { email } = data;
    setIsLoading(true);

    try {
      await forgotPassword({ email });
      toast.success("OTP Code is sent");
      saveEmail(email);
      navigate("/reset-password");
    } catch (error) {
      if (error.message === "Network Error") {
        return navigate("/internal-server-error");
      }
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <>
      <h2>Reset Password</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <AuthButton text="Reset Password" isLoading={isLoading} />
      </form>
      {/* <!-- /Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Return to <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
