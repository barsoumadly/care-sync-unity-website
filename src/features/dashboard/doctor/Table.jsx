import { Link } from "react-router-dom";

function Table({ headElements, bodyElements, button, status }) {
  return (
    <div className="table-responsive">
      <table className="table border-0 custom-table comman-table datatable mb-0">
        <TableHeader headElements={headElements} />
        <TableBody
          bodyElements={bodyElements}
          button={button}
          status={status}
        />
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

function TableBody({ bodyElements, button, status }) {
  return (
    <tbody>
      {bodyElements.map((element, index) => (
        <tr key={index}>
          <TableRow
            num={index}
            element={element}
            button={button}
            status={status}
          />
        </tr>
      ))}
    </tbody>
  );
}

function TableRow({ num, element, button = 0, status = 0 }) {
  return (
    <>
      {/* Counter */}
      <td style={{ padding: "0 30px" }}>{num + 1}</td>

      {/* Data */}
      {element.map((row, i) => (
        <>
          <td key={i}>{row}</td>
        </>
      ))}

      {/* Status */}
      {status[num] ? (
        <td>
          <button className={`custom-badge status-${status[num].color} `}>
            {status[num].name}
          </button>
        </td>
      ) : (
        <td></td>
      )}

      {/* Button */}
      {button ? (
        <td>
          <div className="dropdown action-label">
            <Link to={button.link} style={{ marginTop: "3%", color: "#fff" }}>
              <button className="custom-badge book-btn">{button.name}</button>
            </Link>
          </div>
        </td>
      ) : null}
    </>
  );
}
