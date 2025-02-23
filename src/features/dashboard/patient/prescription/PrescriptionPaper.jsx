import { Link } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import { IoArrowBackOutline } from "react-icons/io5";

const prescriptionItem = {
  id: 1,
  medicines: [
    { id: 1, name: "Panadol", duration: "3 days", amount: "2" },
    { id: 2, name: "Bronchicum", duration: "1 week", amount: "3" },
  ],
};

function PrescriptionPaper() {
  const prescription = JSON.parse(localStorage.getItem("prescription"));

  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row justify-content-center">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-6">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/patient/prescriptions">Prescriptions </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">
                      Prescription Paper
                    </li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/patient/prescriptions"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return to Prescriptions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
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
                          <h2>Prescription</h2>
                          <p>Prescription Number : {prescription.id}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="invoice-info">
                          <strong className="customer-text-one">
                            Prescription From
                          </strong>
                          <h6 className="invoice-name">
                            {prescription.clinicName}
                          </h6>
                          <p>Date: {prescription.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-item-two">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-info">
                          <strong className="customer-text-one">
                            Written by
                          </strong>
                          <h6 className="invoice-name">
                            {prescription.doctor.name}
                          </h6>
                          <p className="invoice-details invoice-details-two">
                            Specialization: {prescription.doctor.specialization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-issues-box">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="invoice-issues-date">
                          <p>Issue Date : {prescription.date}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4"></div>
                      <div className="col-lg-4 col-md-4">
                        <div className="invoice-issues-date">
                          <p>
                            Number of Medicines:{" "}
                            {prescriptionItem.medicines.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="invoice-table table table-center mb-0">
                            <thead>
                              <tr>
                                <th>Medicine Name</th>
                                <th>Duration</th>
                                <th>Amount/Day</th>
                              </tr>
                            </thead>
                            <tbody>
                              {prescriptionItem.medicines.map((medicine) => (
                                <MedicineTuple
                                  medicine={medicine}
                                  key={medicine.id}
                                />
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}

                  <div className="invoice-sign text-end">
                    <img
                      className="img-fluid d-inline-block"
                      src="/images/sign/signature.png"
                      alt="sign"
                      width={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </div>
  );
}

export default PrescriptionPaper;
