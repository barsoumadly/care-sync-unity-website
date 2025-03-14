import { useState } from "react";
import ExaminationCard from "./ExaminationCard";
import PrescriptionPaper from "./WritingPrescriptionPaper";
import AnalysisPaper from "./AnalysisPaper";
import { useLocation } from "react-router-dom";

function Examination() {
  const PATIENT_ID = useLocation().pathname.split("/")[3];
  console.log(PATIENT_ID);

  const [openCard, setOpenCard] = useState("");
  const [isAddingPrescription, setIsAddingPrescription] = useState(false);
  const [isAddingAnalysis, setIsAddingAnalysis] = useState(false);
  return (
    <>
      <div className="personal-list-out">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Full Name</h2>
              <h3>Smith Bruklin</h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Mobile </h2>
              <h3>264-625-2583</h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Email</h2>
              <h3>
                <a
                  href="cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="0a7967637e624a6f676b636624696567"
                >
                  [email&nbsp;protected]
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Location</h2>
              <h3>USA</h3>
            </div>
          </div>
        </div>
      </div>

      {openCard === "medicine" ? (
        <PrescriptionPaper
          setOpenCard={setOpenCard}
          setIsAdding={setIsAddingPrescription}
        />
      ) : openCard === "analysis" ? (
        <AnalysisPaper
          setOpenCard={setOpenCard}
          setIsAdding={setIsAddingAnalysis}
        />
      ) : (
        <>
          <ExaminationCard
            type={"medicine"}
            setOpenCard={setOpenCard}
            isAdding={isAddingPrescription}
          />
          <ExaminationCard
            type={"analysis"}
            setOpenCard={setOpenCard}
            isAdding={isAddingAnalysis}
          />
        </>
      )}
    </>
  );
}

export default Examination;
