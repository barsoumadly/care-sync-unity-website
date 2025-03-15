import { useNavigate } from "react-router-dom";

function OrderTuple({ analysis, analysisNumber }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>#{analysisNumber}</td>
      <td>{analysis.laboratoryName} Laboratory</td>
      <td>{new Date(analysis.createdAt).toLocaleDateString()}</td>
      <td>
        <div className="dropdown action-label">
          <a
            className={`custom-badge ${
              analysis.status === "processing"
                ? "status-purple"
                : "status-green"
            } `}
          >
            {analysis.status === "processing" && "Processing"}
            {analysis.status === "completed" && "Completed"}
          </a>
        </div>
      </td>
      <td>
        {analysis.status === "completed" && (
          <div className="dropdown action-label">
            <button
              className="custom-badge book-btn"
              style={{ marginRight: "20px" }}
              onClick={() =>
                navigate(`/patient/analysis-results/${analysis._id}`)
              }
            >
              Show Results
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default OrderTuple;
