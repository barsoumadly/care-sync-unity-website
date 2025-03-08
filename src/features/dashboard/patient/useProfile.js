import { useQuery } from "@tanstack/react-query";
import { getPatientProfile } from "../../../services/patient";

function useProfile() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["patientData"],
    queryFn: getPatientProfile,
  });
  return { data, isLoading, error };
}

export default useProfile;
