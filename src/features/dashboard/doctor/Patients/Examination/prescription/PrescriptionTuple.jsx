import { useState } from "react";
import PrescriptionPaper from "./PrescriptionPaper";
import { FaCircleDown, FaCircleUp } from "react-icons/fa6";

function PrescriptionTuple({ prescriptionTuple }) {
  const [showMedicines, setShowMedicines] = useState(false);

  return (
    <>
      <tr>
        <td>{prescriptionTuple?.specialization}</td>
        <td>{prescriptionTuple?.date}</td>

        <td>
          <div class="dropdown action-label">
            <button
              class="custom-badge book-btn"
              onClick={() => setShowMedicines((show) => !show)}
            >
              Show medicines {showMedicines ? <FaCircleUp /> : <FaCircleDown />}
            </button>
          </div>
        </td>
      </tr>
      {showMedicines ? (
        <PrescriptionPaper prescription={prescriptionTuple} />
      ) : null}
    </>
  );
}

export default PrescriptionTuple;
