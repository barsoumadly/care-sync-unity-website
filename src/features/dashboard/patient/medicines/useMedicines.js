import { useQuery } from "@tanstack/react-query";
import { getMedicineOrdersById } from "../../../../services/medicineOrders";

function useMedicineOrders(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-list", id],
    queryFn: () => getMedicineOrdersById(id),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useMedicineOrders;
