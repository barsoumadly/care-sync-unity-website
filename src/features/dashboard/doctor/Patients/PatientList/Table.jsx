import { Link } from "react-router-dom";

function Table({ children }) {
  return (
    <div className="table-responsive">
      <table className="table border-0 custom-table comman-table datatable mb-0">
        {children}
      </table>
    </div>
  );
}

export default Table;
