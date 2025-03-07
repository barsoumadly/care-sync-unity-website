import { Toaster } from "react-hot-toast";

function ToastNotifications() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "#fff",
          color: "#333448",
        },
      }}
    />
  );
}

export default ToastNotifications;
