function PageCard({ children }) {
  return (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default PageCard;
