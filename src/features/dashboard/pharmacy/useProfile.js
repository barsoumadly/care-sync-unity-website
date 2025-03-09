import { useQuery } from "@tanstack/react-query";
import { getPharmacyProfile } from "../../../services/pharmacy";

function useProfile() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pharmacyData"],
    queryFn: getPharmacyProfile,
  });
  return { data, isLoading, error };
}

export default useProfile;
