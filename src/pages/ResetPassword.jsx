import { useState } from "react";
import PasswordEye from "../features/authentication/PasswordEye";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { forgotPassword, resetPassword } from "../services/auth";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import Timer from "../ui/Timer";

function ResetPassword() {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [startCounter, setStartCounter] = useState(true);

  const { userEmail } = useUserContext();

  const navigate = useNavigate();

  const handlePasswordEye1 = function (result) {
    setIsEyeOpen1(result);
  };
  const handlePasswordEye2 = function (result) {
    setIsEyeOpen2(result);
  };

  const handleOTP = async function () {
    console.log(userEmail);
    setStartCounter(true);
    try {
      await forgotPassword({ userEmail });
      toast.success("OTP Code is sent");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    setIsLoading(true);

    const userData = { newPassword, email: userEmail, otp: verificationCode };
    try {
      await resetPassword(userData);
      if (newPassword !== confirmPassword) {
        toast.error("Passwords are not same");
      } else {
        toast.success("Password is reseted");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        return toast.error("Password must be at least 8 characters");
      }
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>Reset Password</h2>
      <form action="login.html" onSubmit={handleSubmit}>
        <div className="input-block">
          <label>
            OTP Code <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type="text"
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
            required
          />
        </div>
        <div className="input-block">
          <label>
            New Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen1 ? "text" : "password"}`}
            value={newPassword}
            onChange={(event) => setPassword(event.target.value)}
            required
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
            value={confirmPassword}
            onChange={(event) => setconfirmPassword(event.target.value)}
            required
          />
          <PasswordEye
            isEyeOpen={isEyeOpen2}
            setIsEyeOpen={handlePasswordEye2}
          />
        </div>
        <div className="forgotpass">
          <button
            to="/forgot-password"
            onClick={handleOTP}
            className="otpBtn"
            disabled={startCounter}
          >
            {startCounter ? (
              <span>
                <Timer setStartCounter={setStartCounter} />s
              </span>
            ) : (
              "Resend OTP"
            )}
          </button>
        </div>
        <AuthButton text="Reset" isLoading={isLoading} />
        <div className="next-sign">
          <p className="account-subtitle">
            Need to return? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
}
// function Timer({ time, setTime, setStartCounter }) {
//   {
//     useEffect(
//       function () {
//         const OTPTimer = setInterval(() => {
//           if (time > 0) {
//             setTime((time) => time - 1);
//           } else {
//             setStartCounter(false);
//             return;
//           }
//         }, 1000);
//         return () => clearInterval(OTPTimer);
//       },
//       [time, setTime, setStartCounter]
//     );
//   }
// }
export default ResetPassword;
