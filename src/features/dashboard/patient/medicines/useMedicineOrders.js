import { useQuery } from "@tanstack/react-query";
import { getMedicineOrders } from "../../../../services/medicineOrders";

function useMedicineOrders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-list"],
    queryFn: getMedicineOrders,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useMedicineOrders;
