function ErrorMessage({ errorMessage, isVisible }) {
  return (
    isVisible && (
      <div className="input-block password-eye">
        <img
          className="img-fluid mb-0"
          src="/images/error/icons/danger.svg"
          alt="Logo"
          width={23}
        />
        <span style={{ marginLeft: "10px", paddingTop: "45px" }}>
          {errorMessage}
        </span>
      </div>
    )
  );
}

export default ErrorMessage;
