import { useMutation } from "@tanstack/react-query";
import { updateDoctor } from "../../../../services/clinic";
import toast from "react-hot-toast";

function useEditDoctor(doctorId) {
  const { mutate: updateDoctorData, isDataLoading } = useMutation({
    mutationFn: ({ data }) => updateDoctor(data, doctorId),
    onSuccess: () => {
      toast.success("Doctor successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    updateDoctorData,
    isDataLoading,
  };
}

export default useEditDoctor;
