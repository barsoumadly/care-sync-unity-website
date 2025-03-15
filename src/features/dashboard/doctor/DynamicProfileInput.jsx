import { useFieldArray } from "react-hook-form";

function DynamicProfileInput({
  control,
  register,
  errors,
  arrayName,
  fieldNamesText,
  fieldNamesDate,
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
            {fieldNamesText.map((fieldName) => (
              <div className="col-12 col-md-6 col-xl-5">
                <div className="input-block local-forms">
                  <label>
                    {fieldName} <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder={`${fieldName}:`}
                    {...register(`${arrayName}.${index}.${fieldName}`, {
                      required: "This field is required",
                    })}
                  />
                  <span className="error-message ">
                    {errors?.[arrayName]?.[index][fieldName]?.message}
                  </span>
                </div>
              </div>
            ))}
            {fieldNamesDate?.map((fieldName) => (
              <div className="col-12 col-md-6 col-xl-5">
                <div className="input-block local-forms">
                  <label>
                    {fieldName} <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    {...register(
                      `${arrayName}.${index}.${fieldName
                        .split(" ")[0]
                        .toLowerCase()}Date`,
                      {
                        required: "This field is required",
                      }
                    )}
                  />
                  <span className="error-message ">
                    {errors?.[arrayName]?.[index][fieldName]?.message}
                  </span>
                </div>
              </div>
            ))}

            <div className="col-12 col-md-6 col-xl-2 mb-4">
              {" "}
              <div className="doctor-submit">
                <button
                  className="btn btn-primary cancel-form"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove{" "}
                </button>
              </div>{" "}
            </div>
          </div>
        );
      })}
      <div className="col-12 col-md-6 col-xl-2">
        <div className="doctor-submit">
          <button
            className="btn btn-primary submit-form me-2"
            type="button"
            style={{ minWidth: "100%" }}
            onClick={() => append({})}
          >
            + Add More {fieldNamesText[0]}
          </button>
        </div>
      </div>
    </>
  );
}

export default DynamicProfileInput;
