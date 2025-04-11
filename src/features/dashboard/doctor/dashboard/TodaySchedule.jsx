import LoadingSpinner from "../../../../ui/LoadingSpinner";
import formatTime from "../../../../utils/formatTime";

function TodaySchedule({ data, isLoading, patients, time }) {
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header pb-0">
            <h4 className="card-title d-inline-block">Today's schedule </h4>{" "}
          </div>
          <div className="card-block table-dash">
            <div className="table-responsive">
              {isLoading ? (
                <LoadingSpinner />
              ) : data && patients !== undefined && patients.length ? (
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th></th>

                      <th>Clinic name</th>
                      <th>Address</th>
                      <th style={{ padding: "0 20px" }}>Time</th>
                      <th>Appointments</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((clinic, index) => {
                      return (
                        <tr key={index}>
                          <td></td>
                          <td className="table-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle"
                              src={clinic?.profilePhoto}
                              alt=""
                            />
                            <h2>{clinic?.clinicName}</h2>
                          </td>
                          <td>
                            {clinic?.clinicAddress?.area},{" "}
                            {clinic?.clinicAddress?.city}
                          </td>
                          <td>{formatTime(time)}</td>

                          <td>{patients?.length} appointments</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {" "}
                    <div className="main-wrapper ">
                      <div
                        style={{
                          margin: "0 auto",
                          textAlign: "center",
                          color: "#2e37a4",
                        }}
                      >
                        <img
                          src="/images/dashborad/appointment.png"
                          alt="no appointment"
                          style={{ width: "40%" }}
                        />
                        <h4>
                          There are no appointments today but be prepared.
                        </h4>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaySchedule;
