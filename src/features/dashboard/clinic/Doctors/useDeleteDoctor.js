import { useMutation } from "@tanstack/react-query";

function useAddDoctor() {
  const { mutate: addNewDoctor, isDataLoading } = useMutation({
    // mutationFn: ({ doctorId }) => (doctorId),
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
