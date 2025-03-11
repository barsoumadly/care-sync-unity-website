import { useFieldArray } from "react-hook-form";

function DynamicDoctorSheduleInput({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    name: "doctorShedule",
    control,
  });
  return (
    <div className="row">
      {fields.map((field, index) => {
        return (
          <>
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
                  From <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="time"
                  {...register(`doctorShedule.${index}.from`, {
                    required: "This field is required",
                  })}
                />
                <span className="error-message ">
                  {errors?.doctorShedule?.[index].from.message}
                </span>
              </div>{" "}
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="input-block local-forms">
                <label>
                  To <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="time"
                  {...register(`doctorShedule.${index}.to`, {
                    required: "This field is required",
                  })}
                />{" "}
                <span className="error-message ">
                  {errors?.doctorShedule?.[index].to.message}
                </span>
              </div>{" "}
            </div>

            {index > 0 && (
              <div className="col-12 col-md-6 col-xl-2">
                {" "}
                <div className="doctor-submit">
                  <button
                    className="btn btn-primary cancel-form"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove shedule{" "}
                  </button>
                </div>{" "}
              </div>
            )}
          </>
        );
      })}
      <div className="col-12 col-md-6 col-xl-2">
        <div className="doctor-submit">
          <button
            className="btn btn-primary submit-form me-2"
            type="button"
            onClick={() => append({ day: "", to: "", from: "" })}
          >
            Add shedule{" "}
          </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default DynamicDoctorSheduleInput;
