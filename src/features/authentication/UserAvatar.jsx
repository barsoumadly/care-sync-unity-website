import { useUserContext } from "../../context/UserContextProvider";

function UserAvatar() {
  const avatar = "/images/dashborad/user-06.jpg";

  const { user } = useUserContext();
  var { name, role } = user;
  name = name.split(" ").slice(0, 2).join(" ");
  role = role.split("_").join(" ");

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
