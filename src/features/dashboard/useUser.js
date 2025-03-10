import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";

function usePharmacy(userId) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default usePharmacy;
