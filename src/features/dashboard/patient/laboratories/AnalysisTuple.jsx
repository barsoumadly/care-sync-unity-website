function AnalysisTuple({ analysis, onOpenModal, onChangeActiveAnalysis }) {
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
      </td>
    </tr>
  );
}

export default AnalysisTuple;
