import { useForm } from "react-hook-form";
import DynamicProfileInput from "../DynamicProfileInput";
import PageCard from "../PageCard";

function DoctorProfessionalDetails({
  // doctorData,
  // onChangeDoctorData,
  onChangePageNumber,
  type,
  register,
  control,
  errors,
}) {
  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  return (
    <>
      {/* Education */}
      <PageCard>
        <div className="col-12">
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>Education Informations</span>
            </h4>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <DynamicProfileInput
            control={control}
            register={register}
            errors={errors}
            fieldNamesText={["Institution", "Degree"]}
            fieldNamesDate={["Starting Date", "Ending Date"]}
            arrayName={"education"}
          />
        </div>
      </PageCard>
      {/* Experience */}
      <PageCard>
        {" "}
        <div className="col-12">
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>Experience Informations</span>
            </h4>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <DynamicProfileInput
            control={control}
            register={register}
            errors={errors}
            fieldNamesText={["Hospital", "Position"]}
            fieldNamesDate={["Starting Date", "Ending Date"]}
            arrayName={"experience"}
          />
        </div>{" "}
      </PageCard>
      {/* Certification  */}
      <PageCard>
        <div className="col-12">
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Certification Informations
              </span>
            </h4>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <DynamicProfileInput
            control={control}
            register={register}
            errors={errors}
            fieldNamesText={["Certification", "Des"]}
            arrayName={"certification"}
          />
        </div>
      </PageCard>
      {type !== "edit" && (
        <PageCard>
          {" "}
          <div className="row">
            <div className=" col-md-6 col-xl-1" style={{ width: "50%" }}>
              <div className="doctor-submit ">
                <button
                  type="button"
                  className="btn btn-primary submit-form me-2"
                  onClick={handleDecPageNumber}
                >
                  Back
                </button>
              </div>
            </div>
            <div className="col-md-6 col-xl-11" style={{ width: "50%" }}>
              <div className="doctor-submit text-end">
                <button
                  type="submit"
                  className="btn btn-primary submit-form me-2"
                  onClick={() =>
                    onChangePageNumber?.((pageNumber) => pageNumber + 1)
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </PageCard>
      )}
    </>
  );
}

export default DoctorProfessionalDetails;
