import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function PasswordEye({ isEyeOpen, setIsEyeOpen }) {
  return (
    <span
      onClick={() => setIsEyeOpen(!isEyeOpen)}
      className={`profile-views confirm-password`}
      style={{ top: "35%" }}
    >
      {isEyeOpen ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
    </span>
  );
}

export default PasswordEye;
