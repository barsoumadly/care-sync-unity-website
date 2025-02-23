import { Link, useNavigate } from "react-router-dom";

function Table({ headElements, bodyElements, button }) {
  return (
    <div className="table-responsive">
      <table
        className="table border-0 custom-table comman-table datatable mb-0"
        style={{ textAlign: "center" }}
      >
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
        {headElements.map((element) => (
          <th>{element}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ bodyElements, button }) {
  return (
    <tbody>
      {bodyElements.map((element, index) => (
        <tr>
          <td>{index + 1}</td>

          {element.map((row) => (
            <td>{row}</td>
          ))}

          {button ? (
            <Link
              to={button.link}
              className="badge badge-primary"
              style={{ marginTop: "3%", color: "#fff" }}
            >
              {button.name}
            </Link>
          ) : null}
        </tr>
      ))}
    </tbody>
  );
}
