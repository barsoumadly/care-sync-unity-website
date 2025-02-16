import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";

function Clock() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    var date = new Date();

    var hour = date.getHours();
    var time = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    setCtime(`${hour}:${minutes} ${time}`);
  };

  // Call at first time only
  useEffect(function () {
    UpdateTime();
  });

  setInterval(UpdateTime, 60000);

  return (
    <div
      className="form-control"
      style={{
        background:
          "linear-gradient(0deg, rgba(51, 53, 72, 0.05), rgba(51, 53, 72, 0.05)), #ffffff",
        margin: "13px ",
        position: "relative",
        width: "150px",
        float: "left",
        fontSize: "18px",
        color: " #2e37a4",
        borderColor: "#fff",
        textAlign: "center",
        bordeRadius: "50px",
        fontWeight: "600",
        borderRadius: "50px",
        padding: "10px 15px 10px 15px",
      }}
    >
      <span style={{ padding: "0px 12px 0px 0px" }}>
        <FaClock />
      </span>
      {ctime}
    </div>
  );
}

export default Clock;
