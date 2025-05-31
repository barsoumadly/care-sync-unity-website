import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Redirect to the static home page
    window.location.href = "/index.html";
  }, []);

  return (
    <div>
      <p>Redirecting to home page...</p>
    </div>
  );
}

export default Home;
