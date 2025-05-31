import { Link, useLocation } from "react-router-dom";
import PrescriptionTuple from "./PrescriptionTuple";
import { IoArrowBackOutline } from "react-icons/io5";
import LoadingSpinner from "../../../../../../ui/LoadingSpinner";
import usePrescriptionsList from "./usePrescriptionsList";
// const data = [
//   {
//     _id: "67e67e9ea527dee0d3982625",
//     patientId: "67cd509db725342217086ef8",
//     clinicName: "Heliopolis Hospital",
//     doctorName: "Smith Bruklin",
//     specialization: "Cardiology",
//     date: "28/3/2025",
//     medicines: [
//       {
//         name: "Panadol",
//         duration: "5 days",
//         dosages: "3",
//         intakeMethod: "After meal",
//         _id: "67e67e9ea527dee0d3982626",
//       },
//       {
//         name: "Bronchicum",
//         duration: "1 week",
//         dosages: "2",
//         intakeMethod: "After meal",
//         _id: "67e67e9ea527dee0d3982627",
//       },
//     ],
//     analyses: [
//       { name: "Fasting Blood Glucose", _id: "67e67e9ea527dee0d3982628" },
//       { name: "Blood Urea", _id: "67e67e9ea527dee0d3982629" },
//     ],
//     __v: 0,
//   },
//   {
//     _id: "67eaeeb2754396b7d7efdf94",
//     patientId: "67cd509db725342217086ef8",
//     clinicName: "Saudi German Hospital",
//     doctorName: "George Philip",
//     specialization: "Cardiology",
//     date: "4/1/2025",
//     medicines: [
//       {
//         name: "Colona",
//         duration: "5 days",
//         dosages: "3",
//         intakeMethod: "Before meal",
//         notes: "At least 20 minutes before a meal with a glass of water",
//         _id: "67eaeeb2754396b7d7efdf95",
//       },
//       {
//         name: "Daflon 1000mg",
//         duration: "week",
//         dosages: "3",
//         intakeMethod: "After meal",
//         notes: "",
//         _id: "67eaeeb2754396b7d7efdf96",
//       },
//       {
//         name: "Aspocid",
//         duration: "Two week",
//         dosages: "2",
//         intakeMethod: "After meal",
//         notes: "",
//         _id: "67eaeeb2754396b7d7efdf97",
//       },
//       {
//         name: "Alphintern",
//         duration: "week",
//         dosages: "3",
//         intakeMethod: "Before meal",
//         notes: "",
//         _id: "67eaeeb2754396b7d7efdf98",
//       },
//     ],
//     analyses: [
//       {
//         name: "Blood Urea",
//         notes: "The normal range is 6 to 24 mg/dL (2.1 to 8.5 mmol/L )",
//         result: 2.3,
//         _id: "67eaeeb2754396b7d7efdf99",
//       },
//       {
//         name: "Fasting Blood Glucose",
//         notes: "The normal range is less than 100 mg/dL (5.6 mmol/L)",
//         result: 0.7,
//         _id: "67eaeeb2754396b7d7efdf9a",
//       },
//       {
//         name: "Folic Acid",
//         notes:
//           "The normal range is 2.7 to 17.0 nanograms per milliliter (ng/mL) ",
//         result: 22.3,
//         result: 16.3,
//         _id: "67eaeeb2754396b7d7efdf9b",
//       },
//       {
//         name: "Triple fat",
//         notes: "The normal range is between 12% and 15% ",
//         result: 26,
//         _id: "67eaeeb2754396b7d7efdf9c",
//       },
//     ],
//     __v: 0,
//   },
// ];

function PrescriptionsList() {
  const path = useLocation();
  const id = path.pathname.split("/")[3];
  const { data: prescriptions, isLoading } = usePrescriptionsList(id);
  const { state: specialization } = useLocation();

  return (
    <>
      <div className="col-xl-10">
        <div className="card invoice-info-card">
          <div className="card-body">
            {/* Invoice Item */}
            <div
              className="invoice-issues-box"
              style={{ padding: "5px", height: "50px" }}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div
                    className="invoice-issues-date"
                    style={{ padding: "10px" }}
                  >
                    <p>Prescription List</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              {/* /Table Header */}

              {isLoading ? (
                <LoadingSpinner />
              ) : prescriptions?.length !== 0 ? (
                <div className="table-responsive">
                  <table className="table border-0 custom-table comman-table datatable mb-0">
                    <thead>
                      <tr>
                        <th>Specialization</th>
                        <th>Date</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {prescriptions
                        ?.reverse()
                        ?.map((prescription, index) =>
                          specialization === prescription?.specialization ? (
                            <PrescriptionTuple
                              prescriptionTuple={prescription}
                              prescriptionNumber={index + 1}
                              key={prescription._id}
                            />
                          ) : null
                        )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className=" container-fluid ">
                  <div className="col-xl-12 ">
                    <div className="card invoice-info-card">
                      <div className="card-boyd">
                        <div
                          className="text-center mt-5 py-5"
                          style={{
                            padding: "0px 10%",
                            backgroundColor: "#fff",
                          }}
                        >
                          <div className="reminder-icon">
                            <img
                              alt="medicine"
                              src="/images/dashborad/prescription.jpg"
                              style={{
                                width: "150%",
                                marginTop: "-50px",
                                marginLeft: "-30px",
                              }}
                            />
                          </div>
                          <h4>No prescriptions are Found</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrescriptionsList;
