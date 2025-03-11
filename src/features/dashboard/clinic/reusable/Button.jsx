function Button({ type, name, onClick }) {
  return (
    <button
      type={type}
      className={`${
        type === "submit"
          ? "btn btn-primary submit-form me-3"
          : "btn btn-primary cancel-form me-4"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
