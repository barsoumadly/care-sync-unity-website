import { useState } from "react";
import PasswordEye from "./PasswordEye";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);

  const navigate = useNavigate();

  const handlePasswordEye1 = function (result) {
    setIsEyeOpen1(result);
  };
  const handlePasswordEye2 = function (result) {
    setIsEyeOpen2(result);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords are not same");
      return setIsVisible(true);
    }

    const userData = { password };
    navigate("/login");
  };

  return (
    <>
      <h2>Reset Password</h2>
      <form action="login.html" onSubmit={handleSubmit}>
        <div className="input-block">
          <label>
            New Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen1 ? "text" : "password"}`}
            value={password}
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
        {isVisible && <ErrorMessage errorMessage={errorMessage} />}
        <div className="input-block login-btn">
          <button className="btn btn-primary btn-block" type="submit">
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
