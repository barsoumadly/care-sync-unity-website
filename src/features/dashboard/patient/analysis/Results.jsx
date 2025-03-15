import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import ResultTuple from "./ResultTuple";
import useAnalysis from "./useAnalysis";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function Results() {
  const { id: orderId } = useParams();
  const { isLoading, data } = useAnalysis(orderId);
  const analysisResults = data?.results;

  const totalPrice = analysisResults
    ?.map((analysis) => analysis.price)
    .reduce((i, j) => i + j);

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
                      <a>Analysis Results</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Results List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/patient/analysis-results"
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
                                <th>Analysis Name</th>
                                <th>Result</th>
                                <th>Normal Result</th>
                                <th>Price</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {analysisResults.map((analysis) => (
                                <ResultTuple
                                  analysis={analysis}
                                  key={analysis.id}
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
                              }}
                            >
                              Total Price:{" "}
                              <span
                                style={{ color: "#2e37a4", fontWeight: "600" }}
                              >
                                {totalPrice} EGP
                              </span>
                            </span>
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

export default Results;
