import { useQuery } from "@tanstack/react-query";
import { getMedicinesListByPharamcyId } from "../../../../services/medicine";

function useMedicines(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["medicineList", id],
    queryFn: () => getMedicinesListByPharamcyId(id),
  });
  return { data, isLoading, error };
}

export default useMedicines;
