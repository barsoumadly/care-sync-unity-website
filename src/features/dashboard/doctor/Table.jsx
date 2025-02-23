import { Link } from "react-router-dom";

function Table({ headElements, bodyElements, button }) {
  return (
    <div className="table-responsive">
      <table className="table border-0 custom-table comman-table datatable mb-0">
        <TableHeader headElements={headElements} />
        <TableBody bodyElements={bodyElements} button={button} />
      </table>
    </div>
  );
}

export default Table;

function TableHeader({ headElements }) {
  return (
    <thead>
      <tr>
        {headElements.map((element, index) => (
          <th key={index}>{element}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ bodyElements, button }) {
  return (
    <tbody>
      {bodyElements.map((element, index) => (
        <tr key={index}>
          <td>{index + 1}</td>

          {element.map((row, i) => (
            <td key={i}>{row}</td>
          ))}

          {button ? (
            <td>
              <div className="dropdown action-label">
                <Link
                  to={button.link}
                  style={{ marginTop: "3%", color: "#fff" }}
                >
                  <button className="custom-badge book-btn">
                    {button.name}
                  </button>
                </Link>
              </div>
            </td>
          ) : null}
        </tr>
      ))}
    </tbody>
  );
}
