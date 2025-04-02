import { Link } from "react-router-dom";
import HospitalCard from "./HospitalCard";
import { IoArrowBackOutline } from "react-icons/io5";
import useClinics from "./useClinics";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import useProfile from "../useProfile";

function HospitalsList() {
  const { data: clinicsList, isLoading } = useClinics();

  const { data: user, isLoading: isLoad } = useProfile();

  const nearestClinics = clinicsList
    ?.filter((clinic) => clinic.address.area === user?.address?.area)
    .filter((clinic) => !clinic.name.includes("Clinic"));

  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-6">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Hospitals </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Hospital List</li>
              </ul>
            </div>
            <div class="col-sm-5 col-6 text-end">
              <Link to="/patient/dashboard" class="btn btn-primary btn-rounded">
                <IoArrowBackOutline /> Return Back
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table show-entire">
              <div className="card-body">
                {/* /Table Header */}
                <div className="staff-search-table">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>Hospital Name </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex. Heliopolis"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-2">
                        <div className="input-block local-forms">
                          <label>Specialization </label>
                          <select className="form-control pass-input">
                            <option value="" disabled selected>
                              Select Specialization
                            </option>
                            <option value="cairo">cardiology</option>
                            <option value="giza">neurology</option>
                            <option value="alex">oncology</option>
                            <option value="alex">orthopedics</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-2">
                        <div className="input-block local-forms">
                          <label>City </label>
                          <select className="form-control pass-input">
                            <option value="" disabled selected>
                              Select your city
                            </option>
                            <option value="cairo">Cairo</option>
                            <option value="giza">Giza</option>
                            <option value="alex">Alexandria</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-2">
                        <div className="input-block local-forms">
                          <label>Area </label>
                          <select className="form-control pass-input">
                            <option value="" disabled selected>
                              Select your area
                            </option>
                            <option value="cairo">Maadi</option>
                            <option value="giza">Heliopolis</option>
                            <option value="alex">Ain Shams</option>
                            <option value="alex">Bab al-Louq</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="doctor-submit">
                          <button
                            type="submit"
                            className="btn btn-primary submit-list-form me-2"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {isLoading ? (
                  <LoadingSpinner />
                ) : nearestClinics?.length !== 0 ? (
                  <div className="row">
                    {/* Cards */}
                    {nearestClinics?.map((clinic) => (
                      <HospitalCard clinic={clinic} key={clinic.id} />
                    ))}
                  </div>
                ) : (
                  <div className=" container-fluid ">
                    <div className="col-xl-12 ">
                      <div className="card invoice-info-card">
                        <div className="card-boyd">
                          <div
                            className="text-center mt-5 py-5"
                            style={{
                              padding: "0px 10%",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div className="reminder-icon">
                              <img
                                alt="medicine"
                                src="/images/dashborad/clinic.png"
                                style={{ width: "160%", marginLeft: "-40px" }}
                              />
                            </div>
                            <h4>No Hospitals are Found</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalsList;
