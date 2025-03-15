function ResultTuple({ analysis, onOpenModal, onSetActiveAnalysis }) {
  return (
    <tr>
      <td>{analysis.name}</td>
      <td>{analysis.result}</td>
      <td>{analysis.normalResult}</td>
      <td>{analysis.price} EGP</td>
      <td>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            onClick={() => {
              onSetActiveAnalysis(analysis);
              onOpenModal(true);
            }}
          >
            {analysis.result === "__ mg/dl" ||
            analysis.normalResult === "__ to __ mg/dl"
              ? "Add Result"
              : "Edit Result"}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ResultTuple;
