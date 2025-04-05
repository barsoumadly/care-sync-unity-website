import Schedule from "./Schedule";
import useScheduleList from "./useScheduleList";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import NoData from "../../clinic/NoData";

function DoctorShedule() {
  const { data, isLoading } = useScheduleList();

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="activites.html">Doctor </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Doctor shedule</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="activity">
                    <div className="activity-box">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : data && data?.[0]?.clinicId ? (
                        <ul className="activity-list">
                          {data?.map((sch) => (
                            <Schedule scheduleData={sch} key={sch.id} />
                          ))}
                        </ul>
                      ) : (
                        <NoData
                          name={"Working hours"}
                          button={{ link: "/doctor/dashboard", label: "Back" }}
                        />
                      )}
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

export default DoctorShedule;
