import SpinnerMini from "./SpinnerMini";

function AuthButton({ isLoading, text }) {
  return (
    <div className="input-block login-btn">
      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <SpinnerMini /> : text}
      </button>
    </div>
  );
}

export default AuthButton;
