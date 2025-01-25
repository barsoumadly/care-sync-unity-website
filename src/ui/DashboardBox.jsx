import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardBox() {
  const [minbar, setMinbar] = useState(false);
  const [showbar, setShowbar] = useState(true);
  return (
    <>
      <Header setShowbar={setShowbar} setMinbar={setMinbar} />
      <Sidebar minbar={minbar} showbar={showbar} />
    </>
  );
}

export default DashboardBox;
