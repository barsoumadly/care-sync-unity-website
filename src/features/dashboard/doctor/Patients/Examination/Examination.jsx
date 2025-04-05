import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import AnalysisPaper from "./AnalysisPaper";
import ExaminationCard from "./ExaminationCard";
import CheckChosicModal from "../../CheckChosicModal";
import PrescriptionPaper from "./WritingPrescriptionPaper";
import useWritingPrescription from "./useWritingPrescription";
import { useAuth } from "../../../../../context/AuthContext";
import { examination } from "../../../../../services/clinic";

function Examination({ patient }) {
  const { appointmentId } = useParams();
  const [openCard, setOpenCard] = useState("");
  const [isAddingPrescription, setIsAddingPrescription] = useState(false);
  const [isAddingAnalysis, setIsAddingAnalysis] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newData, setNewData] = useState(false);

  const { user } = useAuth();
  const path = useLocation();
  const date = new Date().toLocaleDateString();
  const clinicName = path.pathname.split("/")[2].split("%20").join(" ");
  const id = path.pathname.split("/")[3];
  const specialization = "test";

  const { mutate } = useWritingPrescription();

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
    setIsOpen((isOpen) => !isOpen);
    setNewData(data);
  }

  function onConfirm() {
    const ExaminationData = {
      ...newData,
      doctorName: user.name,
      clinicName: clinicName,
      patientId: id,
      specialization,
      date,
    };
    mutate(ExaminationData);
    examination(appointmentId, "completed");
  }

  return (
    <>
      <div className="personal-list-out">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Full Name</h2>
              <h3>{patient?.userId?.name}</h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Mobile </h2>
              <h3>{patient?.phone}</h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Email</h2>
              <h3>{patient?.userId?.email}</h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Location</h2>
              <h3>{patient?.address?.city}</h3>
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
            patientName={patient?.userId?.name}
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
            patientName={patient?.userId?.name}
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

      {isOpen && (
        <CheckChosicModal
          handleOpenModal={() => setIsOpen((isOpen) => !isOpen)}
          onConfirm={onConfirm}
          name="Examination"
        />
      )}
    </>
  );
}

export default Examination;
