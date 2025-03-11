import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DynamicField from "./DynamicField";
import { useState } from "react";

function MedicineAddition() {
  const [medicineList, setMedicineList] = useState([{}]);
  const [openCard, setOpenCard] = useState(false);

  function handleCancel() {
    setMedicineList([{}]);
    setOpenCard(false);
  }

  function handleSubmit() {
    console.log(medicineList);
    if (medicineList[0].medicine_name) {
      setMedicineList([{}]);
      setOpenCard(false);
    }
  }

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
                    <li className="breadcrumb-item active">Add Medicine</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/pharmacy/dashboard"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
                </div>
              </div>
            </div>
            {openCard ? (
              <div className=" container-fluid ">
                <div className="col-xl-12 ">
                  <div className="card invoice-info-card">
                    <div className="card-body">
                      <div className="invoice-item invoice-item-one">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="invoice-logo">
                              <img
                                src="/public/images/logo/care-sync-unity-logo.png"
                                alt="logo"
                              />
                            </div>
                            <div className="invoice-head">
                              <h2>Add Medicine</h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="invoice-item invoice-item-two">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="invoice-info">
                              <strong className="customer-text-one"></strong>
                              <h6 className="invoice-name"></h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DynamicField
                        fields={{
                          f1: "Medicine Name",
                          f2: "Quantity",
                          f3: "Price",
                          f4: "Expiration Date",
                        }}
                        serviceList={medicineList}
                        setServiceList={setMedicineList}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="doctor-submit text-end">
                    <button
                      type="submit"
                      className="btn btn-primary submit-form me-2"
                      onClick={handleSubmit}
                    >
                      Save Prescription
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
              </div>
            ) : (
              <div className=" container-fluid ">
                <div className="col-xl-12 ">
                  <div className="card invoice-info-card">
                    <div className="card-boyd">
                      <div
                        className="text-center mt-5 py-5"
                        style={{ padding: "0px 10%", backgroundColor: "#fff" }}
                      >
                        <div className="reminder-icon">
                          <img
                            alt="medicine"
                            src="/images/dashborad/medicine.webp"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <h4>Start adding medicines to your list</h4>
                        <button
                          className="btn btn-primary mt-4 btn-block"
                          style={{ width: "450px" }}
                          onClick={() => setOpenCard(true)}
                        >
                          Add medicine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicineAddition;
