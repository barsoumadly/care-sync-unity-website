function UserAvatar() {
  const user = "Liam Michael";
  const type = "Doctor";
  const avatar = "/images/dashborad/user-06.jpg";

  return (
    <>
      {" "}
      <div className="user-names">
        <h5>{user} </h5>
        <span>{type}</span>
      </div>
      <span className="user-img">
        <img src={avatar} alt="Admin" />
      </span>
    </>
  );
}

export default UserAvatar;
