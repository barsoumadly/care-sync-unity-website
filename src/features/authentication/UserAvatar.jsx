import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useUser from "../dashboard/useUser";
import LoadingSpinner from "../../ui/LoadingSpinner";

function UserAvatar() {
  const { user } = useAuth();
  const { data, isLoading } = useUser(user.id);

  let { name, role, profilePhoto: avatar } = user;
  name = name.split(" ").slice(0, 2).join(" ");
  role = role.split("_");

  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div
            className="user-names"
            onClick={() =>
              user?.profileCompleted
                ? navigate(`/${role[0].toLowerCase()}/view-profile`)
                : null
            }
          >
            <h5>{name}</h5>
            <span>{role.join(" ")}</span>
          </div>
          <span className="user-img">
            <img src={data?.profilePhoto?.url} alt="Admin" />
          </span>
        </>
      )}
    </>
  );
}

export default UserAvatar;
