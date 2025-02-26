import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { logout } from "../../../services/auth";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");
  alert(
    phoneRe.test(digits)
      ? "😁Your Phone number is Vaild"
      : "❌Your Phone number isn't Vaild"
  );
}

function CompleteClinicProfile() {
  const { register, handleSubmit, reset } = useForm();
  const { userLogout } = useAuth();

  function onSubmit(data) {
    console.log(data);
    telephoneCheck(data.mobile);
  }

  function handleCancel() {
    reset();
  }
  return (
    <>
      <div className="page-wrapper" style={{ marginLeft: "0px" }}>
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Clinic </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Complete Profile</li>
                </ul>
              </div>
              <div className="col-sm-5 col-6 text-end">
                <Link
                  onClick={() => {
                    userLogout();
                    logout();
                  }}
                  class="btn btn-primary btn-rounded"
                >
                  <IoArrowBackOutline /> Logout
                </Link>
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
                          <h4>Clinic Details</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Clinic Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="ex: MedLink"
                            {...register("clinicName")}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="ex: +20123456789"
                            {...register("mobile")}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Founded <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="ex: 1996"
                            {...register("founded")}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            City
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            {...register("city")}
                          >
                            <option>Select City</option>
                            <option>Cario</option>
                            <option>Alexandria</option>
                            <option>Giza</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Area
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            {...register("area")}
                          >
                            <option>Select Area</option>
                            <option>Almnib</option>
                            <option>Ain Shams</option>
                            <option>Shebra</option>
                            <option>Maadi</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Address
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder={
                              "101, Elanxa Apartments, 340 N Madison Avenue"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="input-block local-forms">
                          <label>
                            Start Biography{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            required
                            cols={30}
                            {...register("biography")}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-top-form">
                          <label className="local-top">
                            Avatar <span className="login-danger">*</span>
                          </label>
                          <div className="settings-btn upload-files-avator">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              // onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)"
                              className="hide-input"
                              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                          <div className="upload-images upload-size">
                            <img
                              src="/images/profile/clinic.jpeg"
                              alt="Image"
                            />
                            <a
                              href="javascript:void(0);"
                              className="btn-icon logo-hide-btn"
                            >
                              <i className="feather-x-circle" />
                            </a>
                          </div>
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
                            onClick={handleCancel}
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
    </>
  );
}

export default CompleteClinicProfile;
