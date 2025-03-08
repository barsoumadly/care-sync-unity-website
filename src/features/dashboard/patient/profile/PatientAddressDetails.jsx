import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function PatientAddressDetails({
  patientData,
  onChangePatientData,
  onChangePageNumber,
}) {
  const [cities, setCities] = useState();
  const [areas, setAreas] = useState();
  const [selectedCity, setSelectedCity] = useState(patientData.selectedCity);
  const [selectedArea, setSelectedArea] = useState(patientData.selectedArea);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(function () {
    async function getCities() {
      const response = await fetch(
        "https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs"
      );
      const data = await response.json();
      if (data) {
        setCities(data);
        if (patientData.selectedCity) {
          setAreas(
            data.filter((city) => city.code === patientData.selectedCity)
          );
        }
      }
    }
    getCities();
    setValue("address", patientData.address);
  }, []);

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  const performSubmit = function (data) {
    onChangePatientData({
      ...patientData,
      ...data,
      selectedCity,
      selectedArea,
    });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };

  function hanbleSelection(event) {
    const seletcity = event.target.value;
    setSelectedCity(seletcity);
    setAreas(cities?.filter((city) => city.code === seletcity));
  }

  return (
    <form onSubmit={handleSubmit(performSubmit)}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Address Details
              </span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              City <span className="login-danger">*</span>
            </label>
            <select
              className="form-control"
              required
              value={selectedCity}
              onChange={hanbleSelection}
            >
              <option value="Select City" selected disabled>
                Select City
              </option>

              {cities?.map((city) => (
                <option value={city.code} key={city.id}>
                  {city.code}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Area <span className="login-danger">*</span>
            </label>
            <select
              className="form-control"
              required
              value={selectedArea}
              onChange={(event) => setSelectedArea(event.target.value)}
            >
              <option value="Select Area" selected disabled>
                Select Area
              </option>

              {areas?.[0].cityDataModels.map((area) => (
                <option value={area.namePrimaryLang} key={area.id}>
                  {area?.namePrimaryLang}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="input-block local-forms">
            <label>
              Address <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              required
              placeholder="ex: El Hegaz St, Al Matar, El Nozha"
              {...register("address")}
            />
          </div>
        </div>
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
            <button type="submit" className="btn btn-primary submit-form me-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PatientAddressDetails;
