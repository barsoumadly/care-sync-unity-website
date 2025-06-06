import { useFieldArray } from "react-hook-form";

function DynamicAnalysisInput({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    name: "analyses",
    control,
  });
  return (
    <>
      {fields.map((field, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="input-block local-forms">
                <label>
                  Analysis Name <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Analysis Name:"
                  {...register(`analyses.${index}.name`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.analyses?.[index].name.message}
                </span>
              </div>{" "}
            </div>

            <div className="col-12 col-md-6 col-xl-5">
              <div className="input-block local-forms">
                <label>Notes</label>
                <input
                  className="form-control"
                  type="text"
                  {...register(`analyses.${index}.notes`)}
                />
              </div>
            </div>
            {index === fields.length - 1 && (
              <div className="col-12 col-md-6 col-xl-2">
                <div className="doctor-submit">
                  <button
                    className="btn btn-primary submit-form me-2"
                    type="button"
                    style={{ minWidth: "100%" }}
                    onClick={() => append({ name: "", notes: "" })}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            {index > 0 && (
              <div className="col-12 col-md-6 col-xl-2 mb-5">
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
    </>
  );
}

export default DynamicAnalysisInput;
