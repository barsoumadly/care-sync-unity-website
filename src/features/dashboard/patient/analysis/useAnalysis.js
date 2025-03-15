import { useQuery } from "@tanstack/react-query";
import { getAnalysisOrdersById } from "../../../../services/analysisOrders";

function useMedicineOrders(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-list", id],
    queryFn: () => getAnalysisOrdersById(id),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useMedicineOrders;
