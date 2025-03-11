function Button({ type, name, onClick }) {
  return (
    <button
      type={type}
      className={`${
        type === "submit"
          ? "btn btn-primary submit-form me-2"
          : "btn btn-primary cancel-form"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
