import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function DoctorTableTuples({ doctor, handleOpenModal, dropdown, setDropdown }) {
  return (
    <>
      <tr>
        <td></td>
        <td className="profile-image">
          <img
            width={28}
            height={28}
            src={doctor.user.profilePhoto.url}
            className="rounded-circle m-r-5"
            alt=""
          />{" "}
          {doctor.user.name}
        </td>

        <td>{doctor.doctor.specialization}</td>

        <td>
          <a className="__cf_email__">{doctor.user.email}</a>
        </td>
        <td>{doctor.user.createdAt.split("T")[0]}</td>
        <td className="text-end">
          <div className="dropdown dropdown-action">
            <a
              className="action-icon dropdown-toggle"
              onClick={() => setDropdown(doctor.doctor._id)}
            >
              <CgMoreVerticalAlt />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              style={{
                display: `${dropdown === doctor.doctor._id ? "block" : "none"}`,
              }}
            >
              <Link
                to={`/clinic/edit-profile-Doc/${doctor.doctor._id}`}
                className="dropdown-item"
              >
                <FaEdit /> Edit
              </Link>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleOpenModal(doctor.doctor._id);
                  setDropdown(doctor.doctor._id);
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
