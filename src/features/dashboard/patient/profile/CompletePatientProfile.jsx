import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout } from "../../../../services/auth";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import PatientPersonalDetails from "./PersonalDetails";
import PatientAddressDetails from "./PatientAddressDetails";
import PatientHealthDetails from "./PatientHealthDetails";
import PatientProfilePhoto from "./PatientProfilePhoto";
import toast from "react-hot-toast";

function CompletePatientProfile() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("select-option");
  const [city, setCity] = useState("select-option");
  const [area, setArea] = useState("select-option");
  const [address, setAddress] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weigh, setWeigh] = useState("");
  const [height, setHeight] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [bloodType, setBloodType] = useState("select-option");
  const [bloodSugar, setBloodSugar] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );

  const [patientData, setPatientData] = useState({});

  const handleSubmit = function (event) {
    event.preventDefault();
    if (phoneNumber.length > 12) {
      return toast.error("Enter a valid phone number.");
    } else if (Number(age) < 0 || Number(age) > 100) {
      return toast.error("Enter a valid age.");
    } else if (Number(temperature) < 34 || Number(temperature) > 45) {
      return toast.error("Enter a valid temperature.");
    } else if (Number(weigh) < 39 || Number(weigh) > 200) {
      return toast.error("Enter a valid weigh.");
    } else if (Number(height) < 54 || Number(height) > 247) {
      return toast.error("Enter a valid height.");
    } else if (Number(heartRate) < 59 || Number(heartRate) > 101) {
      return toast.error("Enter a valid heart rate.");
    } else if (Number(bloodSugar) < 69 || Number(bloodSugar) > 141) {
      return toast.error("Enter a valid blood sugar.");
    } else if (Number(bloodPressure) < 1.4 || Number(bloodPressure) > 2.26) {
      return toast.error("Enter a valid blood pressure.");
    }
  };

  const { userLogout } = useAuth();

  return (
    <div className="page-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-6">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Profile </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Complete Profile</li>
              </ul>
            </div>
            <div class="col-sm-5 col-6 text-end">
              <Link
                className="btn btn-primary btn-rounded"
                onClick={() => {
                  userLogout();
                  logout();
                }}
              >
                Logout <FiLogOut />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div>
                  <PatientPersonalDetails
                    // phoneNumber={phoneNumber}
                    // age={age}
                    // gender={gender}
                    // handlePhoneNumber={setPhoneNumber}
                    // handleAge={setAge}
                    // handleGender={setGender}
                    patientData={patientData}
                    onChangePatientData={setPatientData}
                  />
                  <PatientAddressDetails
                  // city={city}
                  // area={area}
                  // address={address}
                  // handleCity={setCity}
                  // handleArea={setArea}
                  // handleAddress={setAddress}
                  />
                  <PatientHealthDetails
                  // temperature={temperature}
                  // weigh={weigh}
                  // height={height}
                  // heartRate={heartRate}
                  // bloodType={bloodType}
                  // bloodSugar={bloodSugar}
                  // bloodPressure={bloodPressure}
                  // handleTemperature={setTemperature}
                  // handleWeigh={setWeigh}
                  // handleHeight={setHeight}
                  // handleHeartRate={setHeartRate}
                  // handleBloodType={setBloodType}
                  // handleBloodSugar={setBloodSugar}
                  // handleBloodPressure={setBloodPressure}
                  />
                  <PatientProfilePhoto
                    avatar={avatar}
                    handleAvatar={setAvatar}
                  />
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletePatientProfile;
