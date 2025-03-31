import { useState } from "react";
import ExaminationCard from "./ExaminationCard";
import PrescriptionPaper from "./WritingPrescriptionPaper";
import AnalysisPaper from "./AnalysisPaper";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../../context/AuthContext";
import useWritingPrescription from "./useWritingPrescription";

function Examination({ patientName }) {
  const [openCard, setOpenCard] = useState("");
  const [isAddingPrescription, setIsAddingPrescription] = useState(false);
  const [isAddingAnalysis, setIsAddingAnalysis] = useState(false);

  const { user } = useAuth();
  const path = useLocation();
  const date = new Date().toLocaleDateString();
  const clinicName = path.pathname.split("/")[2].split("%20").join(" ");
  // const id = path.pathname.split("/")[3];
  const id = "67cd509db725342217086ef8";
  const specialization = "test";
  const { mutate, isLoading, error } = useWritingPrescription();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      analyses: [{}],
      medicines: [{}],
    },
  });

  function onSubmit(data) {
    const ExaminationData = {
      ...data,
      doctorName: user.name,
      clinicName: clinicName,
      patientId: id,
      specialization,
      date,
    };
    console.log(ExaminationData);
    mutate(ExaminationData);
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        {openCard === "medicine" ? (
          <PrescriptionPaper
            setOpenCard={setOpenCard}
            setIsAdding={setIsAddingPrescription}
            clinicName={clinicName}
            patientName={patientName}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
          />
        ) : openCard === "analysis" ? (
          <AnalysisPaper
            setOpenCard={setOpenCard}
            setIsAdding={setIsAddingAnalysis}
            clinicName={clinicName}
            patientName={patientName}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
          />
        ) : (
          <>
            <ExaminationCard
              setOpenCard={setOpenCard}
              isAddingPrescription={isAddingPrescription}
              isAddingAnalysis={isAddingAnalysis}
            />{" "}
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-primary mt-4 mb-4 btn-block p-3"
                type="submit"
                // onClick={() => setOpenCard("analysis")}
              >
                Please click after the examination is complete.
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default Examination;
