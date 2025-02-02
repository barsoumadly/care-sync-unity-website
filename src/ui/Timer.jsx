import { useEffect, useState } from "react";

function Timer({ setStartCounter }) {
  const [time, setTime] = useState(59);
  useEffect(
    function () {
      const OTPTimer = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1);
        } else {
          setStartCounter(false);
          setTime(0);
          return;
        }
      }, 1000);
      return () => clearInterval(OTPTimer);
    },
    [time, setTime, setStartCounter]
  );
  return time;
}

export default Timer;
