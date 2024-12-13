function UserRole({ userRoleArr, userRole, setUserRole }) {
  return (
    <div className="input-block">
      <label>
        User Role
        <span className="login-danger">*</span>
      </label>
      <select
        className="form-control pass-input"
        value={userRole}
        onChange={(event) => setUserRole(event.target.value)}
      >
        {userRoleArr.map((role) => (
          <option value={role.key} key={role.key}>
            {role.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserRole;
