import { useQuery } from "@tanstack/react-query";
import { getMedicinesList } from "../../../../services/medicine";

function useMedicine() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["medicineList"],
    queryFn: getMedicinesList,
  });
  return { data, isLoading, error };
}

export default useMedicine;
