import { Link, useParams } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import { IoArrowBackOutline } from "react-icons/io5";
import AnalysisTuple from "./AnalysisTuple";

function PrescriptionPaper() {
  const { id: prescriptionNumber } = useParams();
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
                          <p>Prescription Number : {prescriptionNumber}</p>
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
                            {prescription.doctorName}
                          </h6>
                          <p className="invoice-details invoice-details-two">
                            Specialization: {prescription.specialization}
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
                      <div className="col-lg-4 col-md-4">
                        <div className="invoice-issues-date">
                          <p>
                            Number of Medicines:{" "}
                            {prescription?.medicines.length}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="invoice-issues-date">
                          <p>
                            Number of Analyses: {prescription?.analyses.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="invoice-table table table-center mb-0">
                            <thead>
                              <tr>
                                <th>Medicine Name</th>
                                <th>Duration</th>
                                <th>Dosages</th>
                                <th>Intake Method</th>
                              </tr>
                            </thead>
                            <tbody>
                              {prescription?.medicines.map((medicine) => (
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

                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="invoice-table table table-center mb-0">
                            <thead>
                              <tr>
                                <th>Analysis Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              {prescription?.analyses.map((analysis) => (
                                <AnalysisTuple
                                  analysis={analysis}
                                  key={analysis.id}
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
        </div>
      </div>
    </div>
  );
}

export default PrescriptionPaper;
