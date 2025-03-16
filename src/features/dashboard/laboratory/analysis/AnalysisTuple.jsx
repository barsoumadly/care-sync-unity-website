import { Link } from "react-router-dom";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import useAnalysisDelete from "./useAnalysisDelete";

function AnalysisTuple({ analysis, onOpenModal, onChangeActiveAnalysis }) {
  const { removeAnalysis, isDataLoading } = useAnalysisDelete();
  const [dropdown, setDropdown] = useState(false);

  const handleDelete = function (id) {
    removeAnalysis({ id });
  };

  return (
    <tr>
      {isDataLoading ? (
        <LoadingSpinner />
      ) : (
        <>
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
          </td>
          <td className="text-end">
            <div className="dropdown dropdown-action">
              <a
                className="action-icon dropdown-toggle"
                onClick={() => setDropdown((dropdown) => !dropdown)}
              >
                <CgMoreVerticalAlt />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                style={{
                  display: `${dropdown ? "block" : "none"}`,
                }}
              >
                <Link
                  to={`/laboratory/edit-analysis/${analysis._id}`}
                  className="dropdown-item"
                >
                  <FaEdit /> Edit
                </Link>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    handleDelete(analysis._id);
                    setDropdown((dropdown) => !dropdown);
                  }}
                >
                  <RiDeleteBin6Fill /> Delete
                </button>
              </div>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default AnalysisTuple;
