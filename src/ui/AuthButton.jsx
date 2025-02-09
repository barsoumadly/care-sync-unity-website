import SpinnerMini from "./SpinnerMini";

function AuthButton({
  isLoading,
  text,
  resetStyle = "",
  verifyStyle = "",
  disable,
}) {
  return (
    <div className="input-block login-btn">
      <button
        className={`btn btn-primary btn-block ${resetStyle} ${verifyStyle}`}
        type="submit"
        disabled={isLoading === disable}
      >
        {isLoading ? <SpinnerMini /> : text}
      </button>
    </div>
  );
}

export default AuthButton;
