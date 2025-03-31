import { useFieldArray } from "react-hook-form";

function DynamicPrescriptionInput({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    name: "medicines",
    control,
  });
  return (
    <>
      {fields.map((field, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms">
                <label>
                  Rx <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Rx:"
                  {...register(`medicines.${index}.name`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.medicines?.[index].name.message}
                </span>
              </div>{" "}
            </div>

            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms">
                <label>
                  Duration <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ex: 5 days"
                  {...register(`medicines.${index}.duration`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.medicines?.[index].duration.message}
                </span>
              </div>{" "}
            </div>

            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms">
                <label>
                  Dosages <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="During the day:"
                  type="text"
                  {...register(`medicines.${index}.dosages`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.medicines?.[index].dosages.message}
                </span>
              </div>{" "}
            </div>

            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms">
                <label>
                  Intake method <span className="login-danger">*</span>
                </label>
                <select
                  className="form-control select"
                  type="text"
                  {...register(`medicines.${index}.intakeMethod`)}
                >
                  <option disabled>Select method</option>
                  <option>Before meal</option>
                  <option>After meal</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="input-block local-forms">
                <label>Notes</label>
                <input
                  className="form-control"
                  type="text"
                  {...register(`medicines.${index}.notes`)}
                />
              </div>
            </div>

            {index !== 0 && (
              <div className="col-12 col-md-12 col-xl-1 mb-5">
                {" "}
                <div className="doctor-submit">
                  <button
                    className="btn btn-primary cancel-form"
                    style={{ minWidth: "100%" }}
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove{" "}
                  </button>
                </div>{" "}
              </div>
            )}
          </div>
        );
      })}
      <div className="col-12 col-md-6 col-xl-5">
        <div className="doctor-submit">
          <button
            className="btn btn-primary submit-form me-2"
            type="button"
            style={{ minWidth: "100%" }}
            onClick={() =>
              append({
                name: "",
                duration: "",
                dosages: "",
                intakeMethod: "",
                notes: "",
              })
            }
          >
            Add medicine
          </button>
        </div>
      </div>
    </>
  );
}

export default DynamicPrescriptionInput;
