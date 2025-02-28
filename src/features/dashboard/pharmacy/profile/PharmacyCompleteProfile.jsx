import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout } from "../../../../services/auth";
import { useAuth } from "../../../../context/AuthContext";
import AddressDetails from "./AddressDetails";
import PharmacyDetails from "./PharmacyDetails";
import ProfilePhoto from "./ProfilePhoto";
import { useState } from "react";

function PharmacyCompleteProfile() {
  const [pharmacyName, setPharmacyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [city, setCity] = useState("select-option");
  const [area, setArea] = useState("select-option");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const { userLogout } = useAuth();

  const handleSubmit = function (event) {
    event.preventDefault();

    if (phoneNumber.length > 12) {
      return toast.error("Enter a valid phone number.");
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <PharmacyDetails
                    pharmacyName={pharmacyName}
                    phoneNumber={phoneNumber}
                    foundedYear={foundedYear}
                    handlePharmacyName={setPharmacyName}
                    handlePhoneNumber={setPhoneNumber}
                    handleFoundedYear={setFoundedYear}
                  />
                  <AddressDetails
                    city={city}
                    area={area}
                    address={address}
                    handleCity={setCity}
                    handleArea={setArea}
                    handleAddress={setAddress}
                  />
                  <ProfilePhoto avatar={avatar} handleAvatar={setAvatar} />
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyCompleteProfile;
