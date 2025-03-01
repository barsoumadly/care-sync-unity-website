import { useState } from "react";
import PharmacyHeader from "./pharmacyHeader";
import MedicineField from "./MedicineField";
import OrderModal from "./OrderModal";

const medicinesList = [
  { name: "Panadol", photo: "", expirationDate: "08-05-2030", cost: 100 },
  { name: "Bronchicum", expirationDate: "12-09-2030", cost: 69 },
];

function MedicinesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState({});

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectMedicine = function (medicine) {
    setSelectedMedicine(medicine);
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <PharmacyHeader activeTab="medicines" />
            {/* Page Header */}
            <div className="page-header"></div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* /Table Header */}
                    <div className="staff-search-table">
                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="input-block local-forms">
                              <label>Medicine Name </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ex: Panadol"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="doctor-submit">
                              <button
                                type="submit"
                                className="btn btn-primary submit-list-form me-2"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="table-responsive">
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
                          {medicinesList.map((medicine) => (
                            <MedicineField
                              medicine={medicine}
                              onOpenModal={handleOpenModal}
                              key={medicine.id}
                              onSelectMedicine={handleSelectMedicine}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <OrderModal
            medicine={selectedMedicine}
            onOpenModal={handleOpenModal}
          />
        )}
      </div>
    </>
  );
}

export default MedicinesList;
