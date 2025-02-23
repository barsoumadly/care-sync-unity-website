import { Link } from "react-router-dom";

function MedicineField({ medicine, onOpenModal, onSelectMedicine }) {
  return (
    <tr>
      <td className="profile-image">
        <Link>{medicine.name}</Link>
      </td>
      <td> {medicine.expirationDate}</td>
      <td> {medicine.cost} EGP</td>
      <td>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            onClick={() => {
              onSelectMedicine(medicine);
              onOpenModal();
            }}
          >
            Order Medicine
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MedicineField;
