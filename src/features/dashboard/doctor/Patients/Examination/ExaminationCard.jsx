function ExaminationCard({
  setOpenCard,
  isAddingPrescription,
  isAddingAnalysis,
}) {
  return (
    <div className="row">
      {/* medicine */}
      <div
        className="col-xl-6 col-md-6 text-center mt-5 bg-light py-5"
        style={{ padding: "0 10%" }}
      >
        <div className="reminder-icon">
          <img
            src={`${
              isAddingPrescription !== "medicine"
                ? `/images/dashborad/medicine.webp`
                : "/images/dashborad/check-mark.png"
            }`}
            alt="medicine"
            style={{ width: "100%" }}
          />
        </div>
        <h4>{`${
          isAddingPrescription !== "medicine"
            ? `You haven't added any medicine prescription`
            : `You have added a medicine prescription.`
        }`}</h4>
        <button
          className="btn btn-secondary mt-4 btn-block"
          onClick={() => setOpenCard("medicine")}
        >
          {isAddingPrescription !== "medicine" ? "Add" : "Edit"} {"medicine"}
        </button>
      </div>

      {/* analysis */}
      <div
        className="col-xl-6 col-md-6 text-center mt-5 bg-light py-5"
        style={{ padding: "0 10%" }}
      >
        <div className="reminder-icon">
          <img
            src={`${
              isAddingAnalysis !== "analysis"
                ? `/images/dashborad/analysis.webp`
                : "/images/dashborad/check-mark.png"
            }`}
            alt="analysis"
            style={{ width: "100%" }}
          />
        </div>
        <h4>{`${
          isAddingAnalysis !== "analysis"
            ? `You haven't added any analysis prescription`
            : `You have added a analysis prescription.`
        }`}</h4>
        <button
          className="btn btn-secondary mt-4 btn-block"
          onClick={() => setOpenCard("analysis")}
        >
          {isAddingAnalysis !== "analysis" ? "Add" : "Edit"} {"analysis"}
        </button>
      </div>
    </div>
  );
}

export default ExaminationCard;
