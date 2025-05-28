import { useState } from "react";
import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { useAuth } from "../../../context/AuthContext";
import { Outlet } from "react-router-dom";
import LaboratorySidebar from "./LaboratorySidebar";

function LaboratoryLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);
  const { isProfileCompleted } = useAuth();

  return (
    <>
      <title>CSU: Laboratory dashboard</title>
      <meta
        name="description"
        content="Efficient laboratory dashboard for managing test orders, tracking sample statuses, viewing results, and coordinating with clinics and doctors—ensuring accurate and timely diagnostic reporting within the healthcare system."
      />
      <link rel="canonical" href="/laboratory" />

      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/pharmacy/dashboard"}
      />
      {isProfileCompleted && (
        <Sidebar minbar={minbar} showbar={showbar}>
          <LaboratorySidebar />
        </Sidebar>
      )}
      <main className={minbar ? "mini-sidebar" : ""}>
        <Outlet />
      </main>
    </>
  );
}

export default LaboratoryLayout;
