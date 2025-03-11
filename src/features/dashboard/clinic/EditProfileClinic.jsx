import { useForm } from "react-hook-form";
import { useState } from "react";
import CompleteClinicProfile from "./Complete-Profile/CompleteClinicProfile";

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
  return <CompleteClinicProfile clinicData={ClinicData} />;
}

export default EditProfileClinic;
