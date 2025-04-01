import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import useDoctor from "./useDoctor";

function DoctorField({ doctor, onSelectDoctor, onOpenModal }) {
  const { data, isLoading } = useDoctor(doctor.id);
  const days = doctor.schedule.map((schedule) => schedule.day);
  const startTimeHour = doctor.schedule.map(
    (schedule) => schedule.startTime.split(":")[0]
  );
  const startTimeMinutes = doctor.schedule.map(
    (schedule) => schedule.startTime.split(":")[1]
  );
  const startTime = startTimeHour.map((time, i) =>
    Number(time) > 12
      ? `${time - 12 < 10 ? `0${time - 12}` : time - 12}: ${
          startTimeMinutes[i]
        } PM`
      : Number(time) === 12
      ? `${time}:00 PM`
      : `${time < 10 ? `0${time}` : time}: ${startTimeMinutes[i]} AM`
  );

  const endTimeHour = doctor.schedule.map(
    (schedule) => schedule.endTime.split(":")[0]
  );
  const endTimeMinutes = doctor.schedule.map(
    (schedule) => schedule.endTime.split(":")[1]
  );
  const endTime = endTimeHour.map((time, i) =>
    Number(time) > 12
      ? `${time - 12 < 10 ? `0${time - 12}` : time - 12}: ${
          endTimeMinutes[i]
        } PM`
      : `${time < 10 ? `0${time}` : time}: ${endTimeMinutes[i]} AM`
  );

  return (
    <tr>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <td className="profile-image">
            <Link
              to={`/patient/${data?.userId?.name?.split(" ").join("-")}/${
                doctor.id
              }/profile`}
              target="blank"
            >
              <img
                width={28}
                height={28}
                src={data?.userId?.profilePhoto?.url}
                className="rounded-circle m-r-5"
                alt=""
              />
              Dr. {data?.userId?.name}
            </Link>
          </td>
          <td> {data?.specialization}</td>
          <td>
            {days.map((day) => (
              <span>
                {day}
                <br />
                <br />
              </span>
            ))}
          </td>
          <td>
            {startTime.map((time, i) => (
              <span>
                {time} - {endTime[i]} <br />
                <br />
              </span>
            ))}
          </td>
          <td> {doctor.price} EGP</td>
          <td>
            <div className="dropdown action-label">
              <button
                className="custom-badge book-btn"
                onClick={() => {
                  onOpenModal();
                  onSelectDoctor({ ...doctor, ...data });
                }}
              >
                Book appointment
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default DoctorField;
