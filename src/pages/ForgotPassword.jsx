import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/auth";
import { useUserContext } from "../context/UserContextProvider";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUserEmail } = useUserContext();

  const handleSubmit = async function (event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await forgotPassword({ email });
      toast.success("OTP Code is sent");
      navigate("/reset-password");
      setUserEmail(email);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>Reset Password</h2>

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
