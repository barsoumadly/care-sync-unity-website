import { useForm } from "react-hook-form";
import DynamicProfileInput from "../DynamicProfileInput";

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
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ marginBottom: "20px" }}>
            <h5>Education</h5>
          </div>
        </div>
        <DynamicProfileInput
          control={control}
          register={register}
          errors={errors}
          fieldName={"Education"}
          arrayName={"education"}
        />
      </div>
      {/* Experience */}
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ margin: "20px 0" }}>
            <h5>Experience</h5>
          </div>
        </div>
        <DynamicProfileInput
          control={control}
          register={register}
          errors={errors}
          fieldName={"Experience"}
          arrayName={"experience"}
        />
      </div>
      {/* Certification  */}
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ margin: "20px 0" }}>
            <h5>Certification</h5>
          </div>
        </div>
        <DynamicProfileInput
          control={control}
          register={register}
          errors={errors}
          fieldName={"Certification"}
          arrayName={"certification"}
        />
      </div>

      {type !== "edit" && (
        <div className="row">
          <div className="col-12 col-md-6 col-xl-1">
            <div className="doctor-submit text-end">
              <button
                type="button"
                className="btn btn-primary submit-form me-2"
                onClick={handleDecPageNumber}
              >
                Back
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-11">
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
      )}
    </>
  );
}

export default DoctorProfessionalDetails;
