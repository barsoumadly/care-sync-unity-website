import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function DoctorTableTuples({ doctor, handleOpenModal }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <tr>
        <td>
          <div className="form-check check-tables">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="something"
            />
          </div>
        </td>
        <td className="profile-image">
          <Link to={"/clinic/doctor-profile"}>
            <img
              width={28}
              height={28}
              src={doctor.image}
              className="rounded-circle m-r-5"
              alt=""
            />{" "}
            {doctor.name}
          </Link>
        </td>

        <td>{doctor.specialization}</td>

        <td>
          <a>{doctor.mobile}</a>
        </td>
        <td>
          <a
            href="cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="ddb8a5bcb0adb1b89db8b0bcb4b1f3beb2b0"
          >
            {doctor.email}
          </a>
        </td>
        <td>{doctor.joiningDate}</td>
        <td className="text-end">
          <div className="dropdown dropdown-action">
            <a
              className="action-icon dropdown-toggle"
              onClick={() => setDropdown((dropdown) => !dropdown)}
            >
              <CgMoreVerticalAlt />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              style={{
                display: `${dropdown ? "block" : "none"}`,
              }}
            >
              <Link to="/clinic/edit-profile-Doc" className="dropdown-item">
                <FaEdit /> Edit
              </Link>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleOpenModal(doctor.id);
                  setDropdown((dropdown) => !dropdown);
                }}
              >
                <RiDeleteBin6Fill /> Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default DoctorTableTuples;
