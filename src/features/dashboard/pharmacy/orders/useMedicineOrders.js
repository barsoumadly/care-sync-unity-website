import { useQuery } from "@tanstack/react-query";
import { getMedicineOrdersByPharmacyId } from "../../../../services/medicineOrders";

function useMedicineOrders(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["medicine-orders", id],
    queryFn: () => getMedicineOrdersByPharmacyId(id),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useMedicineOrders;
