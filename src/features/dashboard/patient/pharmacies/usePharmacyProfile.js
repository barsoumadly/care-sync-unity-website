import { useQuery } from "@tanstack/react-query";
import { getPharmacy } from "../../../../services/pharmacy";

function usePharmacyProfile(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pharmacy", id],
    queryFn: () => getPharmacy(id),
  });
  return { data, isLoading, error };
}

export default usePharmacyProfile;
