import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    const userEmail = { email };
    navigate("/");
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
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-block login-btn">
          <button className="btn btn-primary btn-block" type="submit">
            Reset Password
          </button>
        </div>
      </form>
      {/* <!-- /Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Need an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
