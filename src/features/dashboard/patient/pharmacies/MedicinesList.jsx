import { useState } from "react";
import PharmacyHeader from "./pharmacyHeader";
import MedicineField from "./MedicineField";
import OrderModal from "./OrderModal";
import useMedicines from "./useMedicines";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";
import usePharmacyProfile from "./usePharmacyProfile";

const medicinesList = [
  { name: "Panadol", expirationDate: "08-05-2030", cost: 100 },
  { name: "Bronchicum", expirationDate: "12-09-2030", cost: 69 },
];

function MedicinesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState({});
  const [medicineOrders, setMedicineOrders] = useState([]);
  const { id } = useParams();
  const { data: pharmacy } = usePharmacyProfile(id);
  const { isLoading, data } = useMedicines(pharmacy?.userId);

  const medicinesNames = medicinesList.map((medicine) => medicine?.name);
  const medicines = data?.medicines.filter((medicine) =>
    medicinesNames.includes(medicine.name)
  );

  const navigate = useNavigate();

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectMedicine = function (medicine) {
    setSelectedMedicine(medicine);
  };

  const handleCancel = function () {
    setMedicineOrders([]);
  };

  const handleCheckOrders = function () {
    localStorage.setItem(
      "order",
      JSON.stringify({
        pharmacyId: pharmacy._id,
        medicines: medicineOrders,
        pharmacyName: pharmacy.name,
      })
    );

    navigate("/patient/check-order");
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <PharmacyHeader activeTab="medicines" pharmacy={pharmacy} />
            {/* Page Header */}
            <div className="page-header"></div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    <div className="table-responsive">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <table className="table border-0 custom-table comman-table datatable mb-0">
                          <thead>
                            <tr>
                              <th>Medicine Name</th>
                              <th>Expiration Date</th>
                              <th>Price</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {medicines?.map((medicine) => (
                              <MedicineField
                                medicine={medicine}
                                onOpenModal={handleOpenModal}
                                key={medicine.id}
                                onSelectMedicine={handleSelectMedicine}
                              />
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {medicineOrders.length > 0 && (
                <div className="col-12">
                  <div class="doctor-submit text-end">
                    <button
                      type="submit"
                      className="btn btn-primary submit-form me-2"
                      onClick={handleCheckOrders}
                    >
                      Check Orders
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary cancel-form"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <OrderModal
            medicine={selectedMedicine}
            onOpenModal={handleOpenModal}
            onSetOrders={setMedicineOrders}
          />
        )}
      </div>
    </>
  );
}

export default MedicinesList;
