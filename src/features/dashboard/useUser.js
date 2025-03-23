import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";

function useUser(userId) {
  if (userId) {
    const { isLoading, data, error } = useQuery({
      queryKey: ["user", userId],
      queryFn: () => getUser?.(userId),
    });

    return {
      data,
      isLoading,
      error,
    };
  } else {
    return {
      data: null,
      isLoading: false,
      error: null,
    };
  }
}

export default useUser;
