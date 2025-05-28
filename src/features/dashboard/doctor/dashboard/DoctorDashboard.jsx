import { Link } from "react-router-dom";
import PieCharts from "../charts/PieChart";
import AreaCharts from "../charts/AreaCharts";
import TodaySchedule from "./TodaySchedule";
import useScheduleList from "../doctor-schedule/useScheduleList";
import { useAuth } from "../../../../context/AuthContext";
import { useEffect, useState } from "react";
import RecentAppointments from "./RecentAppointments";

const colors = [
  "#f63bc0",
  "#de3bf6",
  "#903bf6",
  "#423bf6",
  "#12284c",
  "#3bd0f6",
  "#3bf6ce",
  "#3bf680",
  "#44f63b",
];

function DoctorDashboard() {
  const { data: recentAppointments, isLoading } = useScheduleList();
  const [appointments, setAppointments] = useState();
  const [time, setTime] = useState();
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const today = new Date().toDateString().split(" ")[0].toLowerCase();
  const hour = new Date().getHours();

  useEffect(
    function () {
      const clinicsToday = recentAppointments?.filter(
        (appointment) =>
          appointment?.schedule?.filter((schedule) => {
            if (
              today ===
              schedule?.day?.split("")?.slice(0, 3)?.join("")?.toLowerCase()
            )
              setTime(schedule?.startTime);

            return (
              today ===
              schedule?.day?.split("")?.slice(0, 3)?.join("")?.toLowerCase()
            );
          })?.[0]?.date
      );
      setData(clinicsToday);
    },
    [recentAppointments]
  );

  useEffect(
    function () {
      if (recentAppointments) {
        const appointments = recentAppointments?.map((item, index) => {
          return {
            name: item?.clinicName,
            duration: item?.clinicName,
            durationIncome: `${item?.clinicName} income`,
            value: item?.numberOfAppointments,
            valueIncome: 3504 * (index + 1),
            color: colors[index],
          };
        });
        setAppointments(appointments);
      }
    },
    [recentAppointments]
  );

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="dashboard">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Doctor Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      {hour < 12
                        ? "Good Morning, "
                        : hour < 17
                        ? "Good Afternoon, "
                        : "Good Evening, "}
                      <span>Dr.{user?.name}</span>
                    </h2>
                    <p>Have a nice day at work</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <img src="/images/dashborad/morning-img-02.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-list-blk">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">30</span>
                        <span>/85</span>
                        <span className="status-green">+60%</span>
                      </h4>
                      <h5>Appointments</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">20</span>
                        <span>/125</span>
                        <span className="status-pink">-20%</span>
                      </h4>
                      <h5>Consultations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">12</span>
                        <span>/30</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Operations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">530</span>
                        <span>E£</span>
                        <span />
                        <span className="status-green">+50%</span>
                      </h4>
                      <h5>Earnings</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div id="radial-patients">
                      <PieCharts
                        data={appointments ? appointments : []}
                        label="Appointments"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit mb-0">
                      <h4>Total income</h4>
                      <div className="income-value">
                        <h3>
                          200<span>E£</span>
                        </h3>
                        <p>
                          <span className="passive-view">
                            <i className="feather-arrow-up-right me-1" />
                            40%
                          </span>
                          vs last month
                        </p>
                      </div>
                      <div className="input-block mb-0">
                        <select className="form-control select">
                          <option>2024-2025</option>
                        </select>
                      </div>
                    </div>
                    <div id="apexcharts-area">
                      <AreaCharts />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div id="radial-patients">
                      <PieCharts
                        data={appointments}
                        label="Clinics income for a month"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-xl-7">
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-6">
                    <div className="struct-point">
                      <div className="card patient-structure">
                        <div className="card-body">
                          <h5>New Patients</h5>
                          <h3>
                            56
                            <span className="status-green">
                              <img
                                src="/images/dashborad/icons/sort-icon-01.svg"
                                alt=""
                                className="me-1"
                              />
                              60%
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-6">
                    <div className="struct-point">
                      <div className="card patient-structure">
                        <div className="card-body">
                          <h5>Old Patients</h5>
                          <h3>
                            35
                            <span className="status-pink">
                              <img
                                src="/images/dashborad/icons/sort-icon-02.svg"
                                alt=""
                                className="me-1"
                              />
                              -20%
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <TodaySchedule data={data} isLoading={isLoading} time={time} />
              </div>
              <RecentAppointments
                isLoading={isLoading}
                time={time}
                clinic={data}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;
