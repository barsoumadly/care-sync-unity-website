import { useNavigate } from "react-router-dom";

function MedicineTuple({ medicine }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.quantity} Pieces</td>
      <td>{medicine.price} EGP</td>
      <td>{medicine.expirationDate.split("-").reverse().join("-")}</td>
      <td>
        <div class="dropdown action-label">
          <button
            class="custom-badge book-btn"
            onClick={() => navigate(`/pharmacy/edit-medicine/${medicine._id}`)}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MedicineTuple;
