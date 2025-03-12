import { useNavigate } from "react-router-dom";
import { deleteAnalysis } from "../../../../services/analysis";

function AnalysisTuple({ analysis, onOpenModal, onChangeActiveAnalysis }) {
  const navigate = useNavigate();

  const handleDelete = async function (id) {
    await deleteAnalysis(id);
  };

  return (
    <tr>
      <td>{analysis.name}</td>
      <td style={{ paddingRight: "40px" }}>{analysis.price} EGP</td>
      <td>
        <div class="dropdown action-label">
          <button
            class="custom-badge book-btn"
            onClick={() => {
              onChangeActiveAnalysis(analysis);
              onOpenModal();
            }}
            style={{ marginRight: "120px" }}
          >
            Show Details
          </button>
        </div>
        <div class="dropdown action-label">
          <button
            class="custom-badge book-btn"
            style={{ backgroundColor: "#41ab5d", marginRight: "20px" }}
            onClick={() =>
              navigate(`/laboratory/edit-analysis/${analysis._id}`)
            }
          >
            Edit
          </button>
        </div>
        <div class="dropdown action-label">
          <button
            class="custom-badge book-btn"
            style={{ backgroundColor: "#f03d32" }}
            onClick={() => handleDelete(analysis._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AnalysisTuple;
