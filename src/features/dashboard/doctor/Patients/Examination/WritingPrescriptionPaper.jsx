import { useAuth } from "../../../../../context/AuthContext";
import { useForm } from "react-hook-form";
import DynamicPrescriptionInput from "./DynamicPrescriptionInput";
import toast from "react-hot-toast";
import useWritingPrescription from "./useWritingPrescription";
import { useLocation } from "react-router-dom";

function PrescriptionPaper({
  setOpenCard,
  setIsAdding,
  clinicName,
  patientName,
}) {
  const { user } = useAuth();
  const date = new Date().toLocaleDateString();
  const path = useLocation();
  const clinic = path.pathname.split("/")[2];
  // const id = path.pathname.split("/")[3];
  const id = "67cd509db725342217086ef8";
  const specialization = "test";

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      medicines: [{}],
    },
  });

  const { prescriptionData, mutate, isLoading, error } =
    useWritingPrescription();

  function onSubmit(data) {
    const PrescriptionData = {
      ...data,
      doctorName: user.name,
      clinicName: clinic,
      patientId: id,
      specialization,
      date: new Date().toLocaleDateString(),
    };
    console.log(PrescriptionData);
    mutate(PrescriptionData);

    setIsAdding(true);
    setOpenCard("");
  }

  function handleCancel() {
    reset();
    setOpenCard("");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main-wrapper ">
        {/* Page Content */}
        <div className=" container-fluid " style={{ marginTop: "10%" }}>
          <div className="col-xl-12 ">
            <div className="card invoice-info-card">
              <div className="card-body">
                <div className="invoice-item invoice-item-one">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img
                          src="/public/images/logo/care-sync-unity-logo.png"
                          alt="logo"
                        />
                      </div>
                      <div className="invoice-head">
                        <h2>Prescription</h2>
                        <p>Patient Name: {patientName}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text-one">
                          Prescription From
                        </strong>
                        <h6 className="invoice-name">{clinicName}</h6>
                        <p>Date: {date} </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-item invoice-item-two">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text-one">
                          Written by Dr.{user.name}
                        </strong>
                        <h6 className="invoice-name"></h6>
                        <p className="invoice-details invoice-details-two">
                          Specialization:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <DynamicPrescriptionInput
                  control={control}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="doctor-submit text-end">
          <button
            type="submit"
            className="btn btn-primary submit-form me-2"
            onClick={handleSubmit}
          >
            Save Prescription
          </button>
          <button
            type="button"
            className="btn btn-primary cancel-form"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default PrescriptionPaper;
