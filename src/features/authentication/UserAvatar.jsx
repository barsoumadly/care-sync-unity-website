import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserAvatar() {
  const { user } = useAuth();
  let { name, role, profilePhoto: avatar } = user;
  name = name.split(" ").slice(0, 2).join(" ");
  role = role.split("_").join(" ");

  const navigate = useNavigate();

  return (
    <>
      <div
        className="user-names"
        onClick={() => navigate(`/${role.toLowerCase()}/view-profile`)}
      >
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
