import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPrescription } from "../../../../../services/prescription";
import toast from "react-hot-toast";
import { use, useState } from "react";

function useWritingPrescription() {
  const [prescriptionData, setPrescriptionData] = useState(" ");

  const { mutate, isLoading, error } = useMutation({
    mutationFn: createPrescription,
    onSuccess: (data) => {
      console.log(data);
      setPrescriptionData(data);
      toast.success("Prescription successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  return { prescriptionData, mutate, isLoading, error };
}

export default useWritingPrescription;
