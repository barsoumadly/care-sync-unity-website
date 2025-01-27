import { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { FaFlag, FaPeopleRoof, FaUserDoctor } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { ImUserTie } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoReceipt } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ClinicSidebar({ minbar }) {
  const [toggle, setToggle] = useState(0);
  function hanbleClick(index) {
    if (toggle !== index) {
      setToggle(index);
    } else {
      setToggle(0);
    }
  }
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink
          to={"/clinic/dashboard"}
          className="link"
          onClick={() => hanbleClick(0)}
        >
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Chat */}
      <li>
        <NavLink
          to={"/clinic/chat"}
          className="link"
          onClick={() => hanbleClick(0)}
        >
          <span className="menu-side">
            <BsChatText />
          </span>
          <span>Chat</span>
          <span className="menu-arrow"></span>
        </NavLink>
      </li>

      {/* Doctors */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(1)}>
          <span className="menu-side">
            <FaUserDoctor />
          </span>
          <span> Doctors </span>
          <span className="menu-arrow">
            {toggle === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 1 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink to={"/clinic/doctor-list"} className="link">
              Doctor List
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/add-doctor"} className="link">
              Add Doctor
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Patients */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(2)}>
          <span className="menu-side">
            <FaPeopleRoof />
          </span>
          <span>Patients </span>
          <span className="menu-arrow">
            {toggle === 2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 2 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink to={"/clinic/patients-list"} className="link">
              Patients List
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/add-patients"} className="link">
              Add Patients
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/payments"} className="link">
              payments
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Staff */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(3)}>
          <span className="menu-side">
            <ImUserTie />
          </span>
          <span> Staff </span>
          <span className="menu-arrow">
            {toggle === 3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 3 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink to={"/clinic/employee-salary"} className="link">
              Employee salary
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/add-staff"} className="link">
              Add Staff
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/attendance"} className="link">
              Attendance
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Appointments */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(4)}>
          <span className="menu-side">
            <AiFillSchedule />
          </span>
          <span> Appointments </span>
          <span className="menu-arrow">
            {toggle === 4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 4 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink to={"/clinic/appointment-list"} className="link">
              Appointment List
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/book-appointment"} className="link">
              Book Appointment
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/edit-appointment"} className="link">
              Edit Appointment
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Doctor Schedule */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(5)}>
          <span className="menu-side">
            <GrSchedules />
          </span>
          <span> Doctor Schedule </span>
          <span className="menu-arrow">
            {toggle === 5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 5 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink to={"/clinic/schedule-list"} className="link">
              Schedule List
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/add-schedule"} className="link">
              Add Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to={"/clinic/edit-schedule"} className="link">
              Edit Schedule
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Reports */}
      <li className="submenu">
        <NavLink
          to={"/clinic/reports"}
          className="link"
          onClick={() => hanbleClick(0)}
        >
          <span className="menu-side">
            <FaFlag />
          </span>
          <span> Reports </span>
          <span className="menu-arrow">
            {toggle === 6 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </NavLink>
        <ul style={{ display: "none" }}>
          <li>
            <a href="expense-reports.html"> Expense Report </a>
          </li>
          <li>
            <a href="invoice-reports.html"> Invoice Report </a>
          </li>
        </ul>
      </li>

      {/* Invoice */}
      <li className="submenu">
        <NavLink
          to={"/clinic/invoice"}
          className="link"
          onClick={() => hanbleClick(0)}
        >
          <span className="menu-side">
            <IoReceipt />
          </span>
          <span> Invoice </span>
          <span className="menu-arrow">
            <IoIosArrowForward />
          </span>
        </NavLink>
        <ul style={{ display: "none" }}>
          <li>
            <a href="invoices-list.html"> Invoices List </a>
          </li>
          <li>
            <a href="invoices-grid.html"> Invoices Grid</a>
          </li>
          <li>
            <a href="add-invoice.html"> Add Invoices</a>
          </li>
          <li>
            <a href="edit-invoices.html"> Edit Invoices</a>
          </li>
          <li>
            <a href="view-invoice.html"> Invoices Details</a>
          </li>
          <li>
            <a href="invoices-settings.html"> Invoices Settings</a>
          </li>
        </ul>
      </li>
    </>
  );
}

export default ClinicSidebar;
