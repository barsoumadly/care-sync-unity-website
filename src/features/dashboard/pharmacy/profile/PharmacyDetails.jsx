import { useEffect } from "react";
import { useForm } from "react-hook-form";

function PharmacyDetails({
  pharmacyData,
  onChangePharmacyData,
  onChangePageNumber,
}) {
  const pharmacyDetails = {
    pharmacyName: pharmacyData.pharmacyName,
    phoneNumber: pharmacyData.phoneNumber,
    foundedYear: pharmacyData.foundedYear,
  };
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("pharmacyName", pharmacyDetails.pharmacyName);
    setValue("phoneNumber", pharmacyDetails.phoneNumber);
    setValue("foundedYear", pharmacyDetails.foundedYear);
  }, [pharmacyDetails]);

  const performSubmit = function (data) {
    onChangePharmacyData({ ...pharmacyData, ...data });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };
  return (
    <form onSubmit={handleSubmit(performSubmit)}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Pharmacy Details
              </span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Pharmacy Name <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: El Ezaby"
              required
              // value={pharmacyData.pharmacyName}
              {...register("pharmacyName")}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Phone Number <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: 0123456789"
              required
              // value={pharmacyData.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>Founded Year (optional)</label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 2005"
              // value={pharmacyData.foundedYear}
              {...register("foundedYear")}
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="doctor-submit text-end">
          <button type="submit" className="btn btn-primary submit-form me-2">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default PharmacyDetails;
