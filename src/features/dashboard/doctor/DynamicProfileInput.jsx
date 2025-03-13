import { useFieldArray } from "react-hook-form";

function DynamicProfileInput({
  control,
  register,
  errors,
  arrayName,
  fieldName,
}) {
  const { fields, append, remove } = useFieldArray({
    name: arrayName,
    control,
  });
  return (
    <>
      {fields.map((field, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>
                  {fieldName} <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder={`${fieldName} Name:`}
                  {...register(`${arrayName}.${index}.${fieldName}`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.[arrayName]?.[index][fieldName]?.message}
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6">
              <div className="input-block local-forms">
                <label>{fieldName} Details</label>
                <input
                  className="form-control"
                  type="text"
                  {...register(
                    `${arrayName}.${index}.${fieldName.toLowerCase()}_details`,
                    {
                      required: "This field is required",
                    }
                  )}
                />{" "}
                <span className="error-message ">
                  {
                    errors?.[arrayName]?.[index][
                      `${fieldName.toLowerCase()}_details`
                    ]?.message
                  }
                </span>
              </div>{" "}
            </div>
            {index === fields.length - 1 && (
              <div className="col-12 col-md-6 col-xl-1">
                <div className="doctor-submit">
                  <button
                    className="btn btn-primary submit-form me-2"
                    type="button"
                    style={{ minWidth: "100%" }}
                    onClick={() => append({})}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {index > 0 && (
              <div className="col-12 col-md-6 col-xl-1">
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

export default DynamicProfileInput;
