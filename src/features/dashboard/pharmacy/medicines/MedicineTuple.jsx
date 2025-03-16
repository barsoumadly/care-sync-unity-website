import { Link, useNavigate } from "react-router-dom";
import { deleteMedicine } from "../../../../services/medicine";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import useMedicineDelete from "./useMedicineDelete";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function MedicineTuple({ medicine }) {
  const { removeMedicine, isDataLoading } = useMedicineDelete();
  const [dropdown, setDropdown] = useState(false);

  const handleDelete = function (id) {
    removeMedicine({ id });
  };

  return (
    <tr>
      {isDataLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <td>{medicine.name}</td>
          <td>{medicine.quantity} Pieces</td>
          <td>{medicine.price} EGP</td>
          <td>{medicine.expirationDate.split("-").reverse().join("-")}</td>
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
                <Link
                  to={`/pharmacy/edit-medicine/${medicine._id}`}
                  className="dropdown-item"
                >
                  <FaEdit /> Edit
                </Link>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    handleDelete(medicine._id);
                    setDropdown((dropdown) => !dropdown);
                  }}
                >
                  <RiDeleteBin6Fill /> Delete
                </button>
              </div>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default MedicineTuple;
