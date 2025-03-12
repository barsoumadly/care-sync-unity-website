function LoadingSpinner() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ color: "#2e37a4", marginTop: "20px" }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
