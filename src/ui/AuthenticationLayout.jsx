import { Outlet } from "react-router-dom";
import AuthenticationFrame from "../features/authentication/AuthenticationFrame";
function AuthenticationLayout() {
  return (
    <AuthenticationFrame>
      <Outlet />
    </AuthenticationFrame>
  );
}

export default AuthenticationLayout;
