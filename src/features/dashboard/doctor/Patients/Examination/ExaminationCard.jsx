function ExaminationCard({ type, setOpenCard, isAdding }) {
  return (
    <div
      className="text-center mt-5 bg-light py-5"
      style={{ padding: "0 10%" }}
    >
      <div className="reminder-icon">
        <img
          src={`${
            !isAdding
              ? `/images/dashborad/${type}.webp`
              : "/images/dashborad/check-mark.png"
          }`}
          alt={type}
          style={{ width: "100%" }}
        />
      </div>
      <h4>{`${
        !isAdding
          ? `You haven't added any ${type} prescription`
          : `You have added a ${type} prescription.`
      }`}</h4>
      <button
        className="btn btn-primary mt-4 btn-block"
        onClick={() => setOpenCard(type)}
      >
        {!isAdding ? "Add" : "Edit"} {type}
      </button>
    </div>
  );
}

export default ExaminationCard;
