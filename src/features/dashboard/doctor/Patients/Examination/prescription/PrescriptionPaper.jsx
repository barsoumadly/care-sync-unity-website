import { Link, useParams } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import { IoArrowBackOutline } from "react-icons/io5";
import AnalysisTuple from "./AnalysisTuple";

function PrescriptionPaper({ prescription }) {
  return (
    <div className="content container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <div className="card invoice-info-card">
            <div className="card-body">
              <div className="invoice-item ">
                <div className="">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="invoice-table table table-center mb-0">
                        <thead>
                          <tr>
                            {" "}
                            <th>Analysis Name</th>
                            <th>Result</th>
                            <th>Medicine Name</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescription?.medicines.map((medicine, index) => (
                            <tr>
                              <AnalysisTuple
                                analysis={prescription?.analyses?.[index]}
                                key={prescription?.analyses[index]?._id}
                              />
                              <td>{(2.3 * (index + 1)).toFixed(1)}</td>
                              <MedicineTuple
                                medicine={medicine}
                                key={medicine?._id}
                              />{" "}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
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
