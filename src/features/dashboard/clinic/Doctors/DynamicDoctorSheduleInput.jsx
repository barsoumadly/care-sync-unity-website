import { useFieldArray } from "react-hook-form";

function DynamicDoctorSheduleInput({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    name: "doctorShedule",
    control,
  });

  return (
    <>
      {fields.map((field, index) => {
        return (
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>
                  Available Days <span className="login-danger">*</span>
                </label>

                <select
                  className="form-control select"
                  type="text"
                  {...register(`doctorShedule.${index}.day`)}
                >
                  <option disabled>Select day</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="input-block local-forms">
                <label>
                  Start Time <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="time"
                  {...register(`doctorShedule.${index}.startTime`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.doctorShedule?.[index].startTime.message}
                </span>
              </div>{" "}
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="input-block local-forms">
                <label>
                  End Time <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="time"
                  {...register(`doctorShedule.${index}.endTime`, {
                    required: "This field is required",
                  })}
                />{" "}
                <span className="error-message ">
                  {errors?.doctorShedule?.[index].endTime.message}
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

export default DynamicDoctorSheduleInput;
