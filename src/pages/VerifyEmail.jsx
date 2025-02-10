import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import AuthButton from "../ui/AuthButton";
import { verifyEmail } from "../services/auth";

function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { user } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const otp = code.join("");
    try {
      await verifyEmail({ email: user.email, otp });
      navigate("/login");
      toast.success("Email verified successfully");
    } catch (error) {
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
      return toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="container">
      <div className="max-w-md mx-auto bg-gray-800 bg-opacity-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gray-800 bg-opacity-50 rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Please enter the code sent to:{" "}
            <span style={{ fontWeight: "600", color: "#6B7280" }}>
              {user.email}
            </span>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              text="Verify Email"
              isLoading={isLoading}
              disable={false}
              verifyStyle="verify-style"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
