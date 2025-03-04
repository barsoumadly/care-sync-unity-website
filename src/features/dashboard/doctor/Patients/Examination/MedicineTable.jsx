function MedicineTable({ children }) {
  return (
    <div className="invoice-item invoice-table-wrap">
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="invoice-table table table-center mb-0">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineTable;
