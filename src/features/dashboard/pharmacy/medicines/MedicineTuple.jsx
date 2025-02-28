import { useNavigate } from "react-router-dom";

function MedicineTuple({ medicine }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.quantity}</td>
      <td>{medicine.cost} EGP</td>
      <td>{medicine.expirationDate}</td>
      <td>
        <div class="dropdown action-label">
          <button
            class="custom-badge book-btn"
            onClick={() => navigate("/pharmacy/edit-medicine")}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MedicineTuple;
