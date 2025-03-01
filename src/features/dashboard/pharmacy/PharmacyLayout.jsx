import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import PharmacySidbar from "./PharmacySidebar";
import { Outlet } from "react-router-dom";

function PharmacyLayout() {
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

      {isProfileCompleted && (
        <Sidebar minbar={minbar} showbar={showbar}>
          <PharmacySidbar />
        </Sidebar>
      )}
      <main className={minbar ? "mini-sidebar" : ""}>
        <Outlet />
      </main>
    </>
  );
}

export default PharmacyLayout;
