import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardBox() {
  const [minbar, setMinbar] = useState(false);
  return (
    <>
      <Header minbar={minbar} setMinbar={setMinbar} />
      <Sidebar minbar={minbar} />
    </>
  );
}

export default DashboardBox;
