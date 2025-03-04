import DynamicField from "./DynamicField";
import { useState } from "react";

function DoctorProfessionalDetails({
  doctorData,
  onChangeDoctorData,
  onChangePageNumber,
}) {
  const [education, setEducation] = useState(doctorData?.education);
  const [experience, setExperience] = useState(doctorData?.experience);
  const [certification, setCertification] = useState(doctorData?.certification);

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  const performSubmit = function (event) {
    event.preventDefault();
    onChangeDoctorData({
      ...doctorData,
      education,
      experience,
      certification,
    });

    onChangePageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <>
      {/* Education */}
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ marginBottom: "20px" }}>
            <h5>Education</h5>
          </div>
        </div>
        <DynamicField
          fields={{
            f1: "Education",
            f2: "Education Details",
          }}
          serviceList={
            education ? education : [{ education: "", education_details: "" }]
          }
          setServiceList={setEducation}
        />
      </div>
      {/* Experience */}
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ margin: "20px 0" }}>
            <h5>Experience</h5>
          </div>
        </div>
        <DynamicField
          fields={{
            f1: "Experience",
            f2: "Experience Details",
          }}
          serviceList={
            experience
              ? experience
              : [{ experience: "", experience_details: "" }]
          }
          setServiceList={setExperience}
        />{" "}
      </div>
      {/* Certification  */}
      <div style={{ padding: "20px" }}>
        <div className="col-12">
          <div className="form-heading" style={{ margin: "20px 0" }}>
            <h5>Certification</h5>
          </div>
        </div>
        <DynamicField
          fields={{
            f1: "Certification",
            f2: "Certification Details",
          }}
          serviceList={
            certification
              ? certification
              : [{ certification: "", certification_details: "" }]
          }
          setServiceList={setCertification}
        />
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-xl-1">
          <div className="doctor-submit text-end">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
              onClick={handleDecPageNumber}
            >
              Back
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-11">
          <div className="doctor-submit text-end">
            <button
              type="submit"
              onClick={performSubmit}
              className="btn btn-primary submit-form me-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfessionalDetails;
{
  /* Education */
}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ marginBottom: "20px" }}
//                           >
//                             <h5>Education</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Education",
//                             f2: "Education Details",
//                           }}
//                           serviceList={education}
//                           setServiceList={setEducation}
//                         />
//                       </div>
//                       {/* Experience */}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ margin: "20px 0" }}
//                           >
//                             <h5>Experience</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Experience",
//                             f2: "Experience Details",
//                           }}
//                           serviceList={experience}
//                           setServiceList={setExperience}
//                         />{" "}
//                       </div>
//                       {/* Certification  */}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ margin: "20px 0" }}
//                           >
//                             <h5>Certification</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Certification",
//                             f2: "Certification Details",
//                           }}
//                           serviceList={certification}
//                           setServiceList={setCertification}
//                         />
//                       </div>
