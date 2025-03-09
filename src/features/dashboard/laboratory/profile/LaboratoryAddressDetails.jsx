import { useForm } from "react-hook-form";
import useLocation from "../../useLocation";
import { useEffect, useState } from "react";

function LaboratoryAddressDetails({
  laboratoryData,
  onChangeLaboratoryData,
  onChangePageNumber,
}) {
  const { data, isLoading } = useLocation();

  const [cities, setCities] = useState();
  const [areas, setAreas] = useState();
  const [selectedCity, setSelectedCity] = useState(laboratoryData.selectedCity);
  const [selectedArea, setSelectedArea] = useState(laboratoryData.selectedArea);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(
    function () {
      if (data) {
        setCities(data);
        if (laboratoryData.selectedCity) {
          setAreas(
            data.filter((city) => city.code === laboratoryData.selectedCity)
          );
        }
      }

      setValue("address", laboratoryData.address);
    },
    [data]
  );

  const performSubmit = function (data) {
    onChangeLaboratoryData({
      ...laboratoryData,
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

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

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
              <option value="select-option" dir="">
                Select Option
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
              <option value="select-option" dir="">
                Select Option
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
              // value={laboratoryData.address}
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

export default LaboratoryAddressDetails;
