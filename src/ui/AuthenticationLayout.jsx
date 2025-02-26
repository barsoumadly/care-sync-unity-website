import { Outlet } from "react-router-dom";
import AuthenticationFrame from "../features/authentication/AuthenticationFrame";
import SkipLogin from "../features/authentication/SkipLogin";
function AuthenticationLayout() {
  return (
    <SkipLogin>
      <AuthenticationFrame>
        <Outlet />
      </AuthenticationFrame>
    </SkipLogin>
  );
}

export default AuthenticationLayout;
