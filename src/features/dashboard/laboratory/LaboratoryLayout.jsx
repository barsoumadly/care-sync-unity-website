import { useState } from "react";
import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { useAuth } from "../../../context/AuthContext";
import { Outlet } from "react-router-dom";
import LaboratoryCompleteProfile from "./profile/LaboratoryCompleteProfile";
import LaboratorySidebar from "./LaboratorySidebar";

function LaboratoryLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);
  const { isProfileCompleted } = useAuth();

  return (
    <>
      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/pharmacy/dashboard"}
      />
      {isProfileCompleted ? (
        <>
          <Sidebar minbar={minbar} showbar={showbar}>
            <LaboratorySidebar />
          </Sidebar>
          <main className={minbar ? "mini-sidebar" : ""}>
            <Outlet />
          </main>
        </>
      ) : (
        <LaboratoryCompleteProfile />
      )}
    </>
  );
}

export default LaboratoryLayout;
