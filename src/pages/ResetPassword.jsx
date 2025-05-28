import { useEffect, useRef, useState } from "react";
import PasswordEye from "../features/authentication/PasswordEye";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  forgotPassword,
  resetPassword,
  verifyResetPasswordOtp,
} from "../services/auth";
import AuthButton from "../ui/AuthButton";
import toast from "react-hot-toast";
import Timer from "../ui/Timer";

function ResetPassword() {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // const [verificationCode, setVerificationCode] = useState("");

  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [startCounter, setStartCounter] = useState(true);
  const [showField, setShowField] = useState(false);

  const { userEmail } = useAuth();

  const navigate = useNavigate();

  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePasswordEye1 = function (result) {
    setIsEyeOpen1(result);
  };
  const handlePasswordEye2 = function (result) {
    setIsEyeOpen2(result);
  };

  const handleOTP = async function () {
    setStartCounter(true);
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();

    try {
      await forgotPassword({ email: userEmail });
      toast.success("OTP Code is sent");
    } catch (error) {
      if (error.message === "Network Error") {
        return navigate("/500");
      }
      toast.error(error.response.data.message);
    }
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    setIsLoading(true);

    const userData = {
      newPassword: newPassword !== "" ? newPassword : "newpass1234",
      email: userEmail,
      otp: code.join(""),
    };
    console.log(userData.otp);

    try {
      if (!showField) {
        await verifyResetPasswordOtp(userData);
        toast.success("Valid OTP");
        setShowField(true);
      } else {
        if (newPassword !== confirmPassword) {
          toast.error("Passwords are not same");
        } else {
          await resetPassword(userData);
          toast.success("Password is reseted");
          navigate("/login");
        }
      }
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
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <>
      <title>CSU: Reset password</title>
      <meta
        name="description"
        content="Robust and secure authentication system with role-based access control, enabling seamless and protected login for patients, doctors, clinics, pharmacies, and laboratories within a unified healthcare platform"
      />
      <link rel="canonical" href="/reset-password" />

      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!showField && (
          <>
            <div className="d-flex justify-content-center gap-4">
              {code.map((digit, index) => (
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6"
                  className=" bg-light form-control form-control-lg text-center font-bold rounded   input-number"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  key={index}
                />
              ))}
            </div>
            <AuthButton
              text="Verify"
              isLoading={isLoading}
              disable={false}
              verifyStyle="verify-style"
            />
          </>
        )}

        {showField && (
          <>
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
          </>
        )}
        {!showField && (
          <div className="forgotpass">
            <button
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
        )}
        {showField && (
          <AuthButton
            resetStyle="reset-btn"
            text="Reset"
            isLoading={isLoading}
          />
        )}

        <div className="next-sign">
          <p className="account-subtitle">
            Need to return? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
}
export default ResetPassword;
