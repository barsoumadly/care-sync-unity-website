import LaboratoryHeader from "./LaboratoryHeader";
import useAnalysis from "./useAnalysis";
import AnalysisTuple from "./AnalysisTuple";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
import usePrescription from "../prescription/usePrescription";

function LaboratoryAnalysisList() {
  const laboratory = JSON.parse(localStorage.getItem("laboratory"));

  const { data, isLoading } = useAnalysis(laboratory.userId);
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState(null);
  const { data: presc, isLoading: isLoad } = usePrescription();

  const prescription = isLoad ? null : presc[0];

  const analysesNames = prescription?.analyses?.map(
    (analysis) => analysis?.name
  );

  console.log(analysesNames);

  const analyses = data?.analysisTests?.filter((analysis) =>
    analysesNames?.includes(analysis.name)
  );

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        <div className="content">
          <LaboratoryHeader activeTab="analysis" />
          {/* Page Header */}
          <div className="page-header"></div>

          <>
            {/* /Page Header */}
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {data ? (
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card card-table show-entire">
                        <div className="card-body">
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : (
                            <div className="table-responsive">
                              <table className="table border-0 custom-table comman-table datatable mb-0">
                                <thead>
                                  <tr>
                                    <th>Analysis Name</th>
                                    <th>Price</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  {analyses?.map((analysis) => (
                                    <AnalysisTuple
                                      analysis={analysis}
                                      onOpenModal={handleOpenModal}
                                      onChangeActiveAnalysis={setActiveAnalysis}
                                      key={analysis._id}
                                    />
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
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
                            style={{
                              padding: "0px 10%",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div className="reminder-icon">
                              <img
                                alt="medicine"
                                src="/images/dashborad/analysis.webp"
                                style={{ width: "100%" }}
                              />
                            </div>
                            <h4>No Analysis are Found</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {isOpen && (
              <DetailsModal
                analysis={activeAnalysis}
                onOpenModal={handleOpenModal}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default LaboratoryAnalysisList;
