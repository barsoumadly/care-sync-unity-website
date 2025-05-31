import PrescriptionsList from "./prescription/PrescriptionsList";

function MedicalHistory() {
  return (
    <>
      <div className="hello-park">
        <p>
          My lab results indicate that I may have some metabolic and nutritional
          imbalances. My blood urea and triglyceride (triple fat) levels are
          lower than normal, which could point to liver issues, overhydration,
          or problems with fat absorption. My fasting blood glucose is
          critically low, suggesting hypoglycemia, while my folic acid level is
          within the normal range.
        </p>
        <p>
          To address these concerns, I have been prescribed Colona for digestive
          support for 5 days, Daflon 1000mg for circulatory health for one week,
          Aspocid (a blood thinner) for two weeks, and Alphintern (an
          anti-inflammatory enzyme) for one week.
        </p>
      </div>
      <div>
        <PrescriptionsList />
      </div>
    </>
  );
}

export default MedicalHistory;
