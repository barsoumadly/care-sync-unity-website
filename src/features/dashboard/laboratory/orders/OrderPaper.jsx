import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAnalysis from "../../patient/analysis/useAnalysis";
import ResultTuple from "./ResultTuple";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { useEffect, useState } from "react";
import ResultModal from "./ResultModal";
import toast from "react-hot-toast";
import { editAnalysisOrderStatus } from "../../../../services/analysisOrders";

function OrderPaper() {
  const orderNumber = localStorage.getItem("orderNumber");
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
                      <a>Analysis Orders </a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Analysis List</li>
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
            {isLoading ? (
              <LoadingSpinner />
            ) : (
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
                            <h2>Analyses Order</h2>
                            <p>Order Number : #{orderNumber} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-issues-box">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="invoice-issues-date">
                            <p>
                              Issue Date :{" "}
                              {new Date(data?.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4"></div>
                        <div className="col-lg-4 col-md-4">
                          <div className="invoice-issues-date">
                            <p>Number of Analysis: {results?.length}</p>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice Item */}
                    <div className="col-lg-6 col-md-6">
                      <div className="invoice-total-card">
                        <div className="invoice-total-box">
                          <div className="invoice-total-inner">
                            <p>
                              Additional Charges <span>35 EGP</span>
                            </p>
                            <p className="mb-0">
                              Sub total <span>{totalPrice} EGP</span>
                            </p>
                          </div>
                          <div className="invoice-total-footer">
                            <h4>
                              Total Amount <span>{totalPrice + 35} EGP</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown action-label">
                    <button
                      style={{ marginLeft: "850px", marginBottom: "20px" }}
                      className="custom-badge book-btn"
                      onClick={handleSaveResults}
                    >
                      Send Results
                    </button>
                  </div>
                </div>
              </div>
            )}
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
  );
}

export default OrderPaper;
