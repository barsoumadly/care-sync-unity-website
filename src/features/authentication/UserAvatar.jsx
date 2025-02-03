import { useUserContext } from "../../context/UserContextProvider";

function UserAvatar() {
  const { user } = useUserContext();
  let { name, role, profilePhoto: avatar } = user;
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
