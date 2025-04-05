import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPrescription } from "../../../../../services/prescription";
import toast from "react-hot-toast";
import { use, useState } from "react";

function useWritingPrescription() {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: createPrescription,
    onSuccess: (data) => {
      toast.success("Prescription successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading, error };
}

export default useWritingPrescription;
