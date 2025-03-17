function Button({ type, name, onClick, disabled = false }) {
  return (
    <button
      type={type}
      className={`${
        type === "submit"
          ? "btn btn-primary submit-form me-3"
          : "btn btn-primary cancel-form me-4"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
