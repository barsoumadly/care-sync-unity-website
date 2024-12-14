function ErrorMessage({ errorMessage }) {
  return (
    <div className="input-block password-eye">
      <img
        className="img-fluid mb-0"
        src="/images/error/icons/danger.svg"
        alt="Logo"
        width={21}
      />
      <span
        style={{ marginLeft: "10px", paddingTop: "45px", fontSize: "15px" }}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default ErrorMessage;
