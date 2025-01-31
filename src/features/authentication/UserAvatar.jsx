import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContextProvider";
import { useEffect } from "react";

function UserAvatar() {
  const { user } = useUserContext();
  const avatar = "/images/dashborad/user-06.jpg";
  const navigate = useNavigate();
  useEffect(
    function () {
      if (user === null) {
        navigate("/login");
      }
    },
    [user, navigate]
  );

  if (user !== null) {
    var { name, role } = user;
    name = name.split(" ").slice(0, 2).join(" ");
    role = role.split("_").join(" ");
  }

  return (
    <>
      <div className="user-names">
        <h5>{name}</h5>
        <span>{role}</span>
      </div>
      <span className="user-img">
        <img src={avatar} alt="Admin" />
      </span>
    </>
  );
}

export default UserAvatar;
