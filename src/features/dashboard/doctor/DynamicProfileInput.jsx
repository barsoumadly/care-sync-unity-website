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
      {fields.map((field, index) => (
        <div className="row" key={index}>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="input-block local-forms">
              <label>
                {fieldName.name1} <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder={`${fieldName.name1.toLowerCase()}:`}
                {...register(`${arrayName}.${index}.${fieldName.name1}`, {
                  required: "This field is required",
                })}
              />
              <span className="error-message ">
                {errors?.[arrayName]?.[index]?.[fieldName.name1]?.message}
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-5">
            <div className="input-block local-forms">
              <label>
                {fieldName.name2} <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder={`${fieldName.name2.toLowerCase()}:`}
                {...register(`${arrayName}.${index}.${fieldName.name2}`, {
                  required: "This field is required",
                })}
              />
              <span className="error-message ">
                {errors?.[arrayName]?.[index]?.[fieldName.name2]?.message}
              </span>
            </div>{" "}
          </div>

          {fieldName.date1 && (
            <>
              <div className="col-12 col-md-6 col-xl-5">
                <div className="input-block local-forms">
                  <label>
                    {fieldName.date1} <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    data-date-format="DD MMMM YYYY"
                    {...register(
                      `${arrayName}.${index}.${fieldName.date1
                        .split(" ")[0]
                        .toLowerCase()}Date`,
                      {
                        required: "This field is required",
                      }
                    )}
                  />
                  <span className="error-message ">
                    {errors?.[arrayName]?.[index]?.[fieldName.date1]?.message}
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-5">
                <div className="input-block local-forms">
                  <label>
                    {fieldName.date2} <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    data-date-format="DD MMMM YYYY"
                    {...register(
                      `${arrayName}.${index}.${fieldName.date2
                        .split(" ")[0]
                        .toLowerCase()}Date`,
                      {
                        required: "This field is required",
                      }
                    )}
                  />
                  <span className="error-message ">
                    {errors?.[arrayName]?.[index]?.[fieldName.date2]?.message}
                  </span>
                </div>
              </div>
            </>
          )}

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
      ))}
      <div className="col-12 col-md-6 col-xl-2">
        <div className="doctor-submit">
          <button
            className="btn btn-primary submit-form me-2"
            type="button"
            style={{ minWidth: "100%" }}
            onClick={() => append({})}
          >
            + Add More {arrayName}
          </button>
        </div>
      </div>
    </>
  );
}

export default DynamicProfileInput;
