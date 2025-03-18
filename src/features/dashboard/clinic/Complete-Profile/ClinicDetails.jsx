import { useEffect, useState } from "react";
import PageCard from "../../PageCard";
import useLocation from "../../useLocation";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");

  return phoneRe.test(digits) ? true : false;
}

function ClinicDetails({
  register,
  errors,
  selectedCity,
  setSelectedCity,
  selectedArea,
  setSelectedArea,
}) {
  const [cities, setCities] = useState();
  const [areas, setAreas] = useState();

  const { data, isLoading } = useLocation();

  useEffect(
    function () {
      setAreas(
        cities?.filter((city) => city.code === clinicData?.address.city)
      );
      if (data) {
        setCities(data);
      }
    },
    [data]
  );

  function hanbleSelection(event) {
    const seletcity = event.target.value;
    setSelectedCity(seletcity);
    setAreas(cities?.filter((city) => city.code === seletcity));
  }

  return (
    <PageCard>
      <div className="row">
        <div className="col-12">
          <div className="form-heading">
            <h4>Clinic Details</h4>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="input-block local-forms">
            <label>
              Clinic Name <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: MedLink"
              {...register("name", {
                required: "This field is required",
              })}
            />{" "}
            <span className="error-message ">{errors?.name?.message}</span>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="input-block local-forms">
            <label>
              Mobile <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: +20123456789"
              {...register("phone", {
                required: "This field is required",
                validate: (value) =>
                  telephoneCheck(value) || "Your Phone number isn't Vaild",
              })}
            />
            <span className="error-message ">{errors?.phone?.message}</span>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="input-block local-forms">
            <label>Founded</label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: 1996"
              {...register("founded")}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              City
              <span className="login-danger">*</span>
            </label>
            <select
              className="form-control select"
              value={selectedCity}
              onChange={hanbleSelection}
            >
              <option value="Select City" selected>
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
              Area
              <span className="login-danger">*</span>
            </label>
            <select
              className="form-control select"
              value={selectedArea}
              onChange={(event) => setSelectedArea(event.target.value)}
            >
              <option value="Select Area" selected>
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

        <div className="col-12 col-md-6 col-xl-6">
          <div className="input-block local-forms">
            <label>
              Address
              <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder={"101, Elanxa Apartments, 340 N Madison Avenue"}
              {...register("street", {
                required: "This field is required",
              })}
            />
            <span className="error-message ">{errors?.address?.message}</span>
          </div>
        </div>

        <div className="col-12 col-sm-12">
          <div className="input-block local-forms">
            <label>Start Biography</label>
            <textarea
              className="form-control"
              rows={3}
              cols={30}
              {...register("biography")}
            />
          </div>
        </div>
      </div>
    </PageCard>
  );
}

export default ClinicDetails;
