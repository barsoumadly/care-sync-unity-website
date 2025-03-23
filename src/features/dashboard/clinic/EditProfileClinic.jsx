import LoadingSpinner from "../../../ui/LoadingSpinner";
import CompleteClinicProfile from "./Complete-Profile/CompleteClinicProfile";
import useClinicProfile from "./useClinicProfile";
function EditProfileClinic() {
  const { data, isLoading } = useClinicProfile();
  console.log(data);
  if (isLoading)
    return (
      <div style={{ marginTop: "25%" }}>
        <LoadingSpinner />;
      </div>
    );

  if (data) return <CompleteClinicProfile clinicData={data} />;
}

export default EditProfileClinic;
