import CompleteClinicProfile from "./Complete-Profile/CompleteClinicProfile";
import useClinicProfile from "./useClinicProfile";
function EditProfileClinic() {
  const { data, isLoading } = useClinicProfile();
  return <CompleteClinicProfile clinicData={data} />;
}

export default EditProfileClinic;
