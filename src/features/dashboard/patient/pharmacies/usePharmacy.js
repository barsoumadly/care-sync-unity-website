import { useQuery } from "@tanstack/react-query";
import { getPharmacyList } from "../../../../services/pharmacy";

function usePharmacy() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pharmacyListData"],
    queryFn: getPharmacyList,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default usePharmacy;
