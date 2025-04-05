function Table({ children }) {
  return (
    <div className="table-responsive">
      <table className="table mb-0 border-0 datatable custom-table">
        {children}
      </table>
    </div>
  );
}

export default Table;
