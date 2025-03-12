import { useNavigate } from "react-router-dom";
import { deleteMedicine } from "../../../../services/medicine";

function MedicineTuple({ medicine }) {
  const navigate = useNavigate();

  const handleDelete = async function (id) {
    await deleteMedicine(id);
  };

  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.quantity} Pieces</td>
      <td>{medicine.price} EGP</td>
      <td>{medicine.expirationDate.split("-").reverse().join("-")}</td>
      <td>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            style={{ marginRight: "20px" }}
            onClick={() => navigate(`/pharmacy/edit-medicine/${medicine._id}`)}
          >
            Edit
          </button>
        </div>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            style={{ backgroundColor: "#f03d32" }}
            onClick={() => handleDelete(medicine._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MedicineTuple;
