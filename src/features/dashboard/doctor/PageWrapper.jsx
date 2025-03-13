function PageWrapper({ children, type = false }) {
  return (
    <div className="main-wrapper">
      <div
        className="page-wrapper"
        style={{ marginLeft: `${type ? "0px" : "250px"}` }}
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default PageWrapper;
