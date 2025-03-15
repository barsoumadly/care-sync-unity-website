import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAnalysis from "../../patient/analysis/useAnalysis";
import ResultTuple from "./ResultTuple";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { useEffect, useState } from "react";
import ResultModal from "./ResultModal";
import toast from "react-hot-toast";
import { editAnalysisOrderStatus } from "../../../../services/analysisOrders";

function AnalysisOrderList() {
  const [isOpen, setIsOpen] = useState(false);
  const { id: orderId } = useParams();
  const { isLoading, data } = useAnalysis(orderId);
  const [activeAnalysis, setActiveAnalysis] = useState(null);
  const results = data?.results;
  const [resultList, setResultList] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    setResultList(results ? results : []);
  }, results);

  const totalPrice = results
    ?.map((result) => result.price)
    .reduce((i, j) => i + j);

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSaveResults = async function () {
    const numberOfResults = resultList
      .map((result) =>
        result.result === "__ mg/dl" || result.normalResult === "__ to __ mg/dl"
          ? 0
          : 1
      )
      .reduce((i, j) => i + j);

    if (numberOfResults !== results.length) {
      toast.error("Please add results");
    } else {
      await editAnalysisOrderStatus(orderId, {
        status: "completed",
        results: resultList,
      });
      navigate("/laboratory/analysis-orders");
    }
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
                      <a>Analysis Orders</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Analysis List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/laboratory/analysis-orders"
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
                              {resultList?.map((result) => (
                                <ResultTuple
                                  analysis={result}
                                  key={result.id}
                                  onOpenModal={handleOpenModal}
                                  onSetActiveAnalysis={setActiveAnalysis}
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
                                onClick={handleSaveResults}
                              >
                                Send Results
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
        {isOpen && (
          <ResultModal
            analysis={activeAnalysis}
            onOpenModal={handleOpenModal}
            onSetResults={setResultList}
          />
        )}
      </div>
    </>
  );
}

export default AnalysisOrderList;
