import { useQuery } from "@tanstack/react-query";
import { getLaboratoryProfile } from "../../../services/laboratory";

function useProfile() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["laboratoryData"],
    queryFn: getLaboratoryProfile,
  });
  return { data, isLoading, error };
}

export default useProfile;
