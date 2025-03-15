function PageWrapper({ children, type = false }) {
  return (
    <div className="main-wrapper">
      <div className={`page-wrapper${type ? " minbar" : ""}`}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default PageWrapper;
