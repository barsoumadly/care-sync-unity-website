import { useForm } from "react-hook-form";
import { useState } from "react";
import CompleteClinicProfile from "./Complete-Profile/CompleteClinicProfile";
import useClinicProfile from "./useClinicProfile";

const ClinicData = {
  id: 1,
  clinicName: "moneb clinic",
  mobile: "01201915154",
  founded: "2003",
  address: "moneb",
  biography: "testlkdfg",
  images: [{}],
  avatar: {},
  selectedCity: "RedSea",
  selectedArea: "ganub kouser",
};

function EditProfileClinic() {
  const { data } = useClinicProfile();
  console.log(data);

  return <CompleteClinicProfile clinicData={ClinicData} />;
}

export default EditProfileClinic;
