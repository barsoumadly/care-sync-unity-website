import { useForm } from "react-hook-form";
import useAppointmentList from "./useAppointmentList";
import { useState } from "react";
import formatTime from "../../../../utils/formatTime";
import useBookAppointment from "./useBookAppointment";
function BookAppointment() {
  const { data: doctorInfo, isLoading } = useAppointmentList();
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const [appointment, setAppointment] = useState([]);
  const [doctor, setDoctor] = useState();
  const { BookNewAppointment, isLoading: isBookLoading } = useBookAppointment();

  const hanbleAppointment = function (e) {
    const Did = e.target.value;
    const data = doctorInfo.filter((doctor) => doctor.doctorId === Did);
    setAppointment(data[0].workingDays);
    setDoctor(Did);
  };

  function onSubmit(data) {
    const appointmentData = { ...data, doctorId: doctor };
    BookNewAppointment(appointmentData);
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
                  <a href="appointments.html">Appointment </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Book Appointment</li>
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
                        <h4>Patient Details</h4>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="adam"
                          {...register("name", {
                            required: "This field is require",
                          })}
                        />
                        <span className="error-message">
                          {errors?.name?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                      <div className="input-block local-forms">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="example@email.com"
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                      <div className="input-block local-forms">
                        <label>
                          Type <span className="login-danger">*</span>
                        </label>
                        <select
                          className="form-control select"
                          {...register("type", {
                            required: "This field is require",
                          })}
                        >
                          <option>Select type</option>
                          <option value={"examination"}>Examination</option>
                          <option value={"consultation"}>Consultation</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-2">
                      <div className="input-block select-gender">
                        <label className="gen-label">
                          Gender<span className="login-danger">*</span>
                        </label>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              {...register("gender", {
                                required: "This field is require",
                              })}
                              type="radio"
                              className="form-check-input"
                              value="male"
                            />
                            Male
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              {...register("gender", {
                                required: "This field is require",
                              })}
                              type="radio"
                              className="form-check-input"
                              value="female"
                            />
                            Female
                          </label>
                        </div>
                        <span className="error-message">
                          {errors?.gender?.message}
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-heading">
                        <h4>Appointment Details</h4>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="input-block local-forms">
                        <label>
                          Consulting Doctor{" "}
                          <span className="login-danger">*</span>
                        </label>
                        <select
                          className="form-control select"
                          required
                          disabled={isLoading}
                          onChange={hanbleAppointment}
                        >
                          <option>Select Doctor</option>
                          {doctorInfo?.map((doctor) => (
                            <option value={doctor?.doctorId}>
                              {doctor?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="input-block local-forms">
                        <label>
                          Doctor Schedule{" "}
                          <span className="login-danger">*</span>
                        </label>
                        <select
                          className="form-control select"
                          {...register("scheduleId")}
                          disabled={appointment.length == 0}
                        >
                          <option>Select appointment</option>
                          {appointment?.map((apppoint) => (
                            <option value={apppoint?._id}>
                              {"📅 "}
                              {apppoint?.day}
                              {"   ⌚ "}
                              {formatTime(apppoint?.startTime)}
                              {"-"}
                              {formatTime(apppoint?.endTime)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="doctor-submit text-end">
                        <button
                          type="submit"
                          className="btn btn-primary submit-form me-2"
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary cancel-form"
                        >
                          Cancel
                        </button>
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

export default BookAppointment;
