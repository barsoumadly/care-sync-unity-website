import SpinnerMini from "./SpinnerMini";

function AuthButton({ isLoading, text, resetStyle = "" }) {
  return (
    <div className="input-block login-btn">
      <button
        className={`btn btn-primary btn-block ${resetStyle}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <SpinnerMini /> : text}
      </button>
    </div>
  );
}

export default AuthButton;
