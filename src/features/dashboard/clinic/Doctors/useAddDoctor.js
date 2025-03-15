import { useMutation } from "@tanstack/react-query";
import { addDoctor } from "../../../../services/clinic";

function useAddDoctor() {
  const { mutate: addNewDoctor, isDataLoading } = useMutation({
    mutationFn: ({ doctorData }) => addDoctor(doctorData),
    onSuccess: () => {
      toast.success("Doctor successfully added");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    addNewDoctor,
    isDataLoading,
  };
}

export default useAddDoctor;
