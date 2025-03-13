import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import MedicineTuple from "../../patient/medicines/MedicineTuple";
import useMedicines from "../../patient/medicines/useMedicines";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { editMedicineOrderStatus } from "../../../../services/medicineOrders";

function MedicinesOrderList() {
  const { id: orderId } = useParams();
  const { isLoading, data } = useMedicines(orderId);
  const medicines = data?.medicines;
  const navigate = useNavigate();

  const totalPrice = medicines
    ?.map((medicine) => medicine.price)
    .reduce((i, j) => i + j);

  const handleStatus = async function () {
    await editMedicineOrderStatus(orderId, { status: "on the way" });
    navigate("/pharmacy/medicine-orders");
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-6">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Medicines</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Medicine List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/pharmacy/medicine-orders"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    <div className="table-responsive">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <>
                          <table className="table border-0 custom-table comman-table datatable mb-0">
                            <thead>
                              <tr>
                                <th>Medicine Name</th>
                                <th>Expiration Date</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {medicines.map((medicine) => (
                                <MedicineTuple
                                  medicine={medicine}
                                  key={medicine.id}
                                />
                              ))}
                            </tbody>
                          </table>

                          <div style={{ margin: "15px", marginLeft: "30px" }}>
                            <span
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                marginLeft: "20px",
                                marginRight: "860px",
                              }}
                            >
                              Total Price:{" "}
                              <span
                                style={{ color: "#2e37a4", fontWeight: "600" }}
                              >
                                {totalPrice} EGP
                              </span>
                            </span>
                            <div className="dropdown action-label">
                              <button
                                className="custom-badge book-btn"
                                onClick={handleStatus}
                              >
                                Confirm Order
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicinesOrderList;
