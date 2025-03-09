function PasswordEye({ isEyeOpen, setIsEyeOpen }) {
  return (
    <span
      onClick={() => setIsEyeOpen(!isEyeOpen)}
      className={`profile-views feather-eye${
        isEyeOpen ? "" : "-off"
      } confirm-password`}
      style={{ top: "40%" }}
    ></span>
  );
}

export default PasswordEye;
