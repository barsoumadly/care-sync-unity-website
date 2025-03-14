import { useFieldArray, useForm } from "react-hook-form";
import Button from "../reusable/Button";
import DynamicDoctorSheduleInput from "./DynamicDoctorSheduleInput";
function EditProfileDoc() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      doctorShedule: [{}],
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
  function handleCancel() {
    reset();
  }
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="doctors.html">Doctors </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Edit Doctor</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-heading">
                        <h4>Doctor Details</h4>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          Doctor Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="ex: Daniel Bruk"
                          {...register("doctorName", {
                            required: "This field is required",
                          })}
                        />
                        <span className="error-message ">
                          {errors?.doctorName?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          Specialization <span className="login-danger">*</span>
                        </label>
                        <select
                          className="form-control select"
                          {...register("specialization", {
                            required: "This field is required",
                          })}
                        >
                          <option disabled>Select Specialization</option>
                          <option>Orthopedics</option>
                          <option>Radiology</option>
                          <option>Dentist</option>
                        </select>
                      </div>
                      <span className="error-message ">
                        {errors?.specialization?.message}
                      </span>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block select-gender">
                        <label className="gen-label">
                          Gender<span className="login-danger">*</span>
                        </label>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input mt-0"
                              defaultChecked={true}
                              value={"male"}
                              {...register("gender", {
                                required: "This field is required",
                              })}
                            />
                            Male
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input mt-0"
                              value={"female"}
                            />
                            Female
                          </label>
                        </div>
                        <span className="error-message ">
                          {errors?.gender?.message}
                        </span>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                          Email <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="example@email.com"
                          {...register("email", {
                            required: "This field is required",
                          })}
                        />
                        <span className="error-message ">
                          {errors?.email?.message}
                        </span>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                          Password <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="****************"
                          {...register("password", {
                            required: "This field is required",
                          })}
                        />
                        <span className="error-message ">
                          {errors?.password?.message}
                        </span>
                      </div>
                    </div>

                    {/* Doctor Shedule  */}
                    <div className="form-heading">
                      <h4>Doctor Shedule </h4>
                    </div>
                    <DynamicDoctorSheduleInput
                      control={control}
                      register={register}
                      errors={errors}
                    />

                    {/* Button */}
                    <div className="col-12">
                      <div className="doctor-submit text-end">
                        <Button type="submit" name="Sumbit" />
                        <Button
                          type="button"
                          name="Cancel"
                          onClick={handleCancel}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileDoc;
