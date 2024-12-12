function PasswordEye({ isEyeOpen, setIsEyeOpen }) {
  return (
    <span
      onClick={() => setIsEyeOpen(!isEyeOpen)}
      className={`profile-views feather-eye${
        isEyeOpen ? "" : "-off"
      } confirm-password`}
    ></span>
  );
}

export default PasswordEye;
