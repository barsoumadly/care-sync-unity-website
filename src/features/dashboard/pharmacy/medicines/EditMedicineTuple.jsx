import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useMedicine from "./useMedicine";
import { useForm } from "react-hook-form";
import { editMedicineDetails } from "../../../../services/medicine";

function EditMedicineTuple() {
  const { isLoading, data, error } = useMedicine();
  const { medicineId } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const [medicine] = data?.medicines?.filter(
    (medicine) => medicine._id === medicineId
  );

  const navigate = useNavigate();

  useEffect(() => {
    setValue("name", medicine.name);
    setValue("quantity", medicine.quantity);
    setValue("expirationDate", medicine.expirationDate);
    setValue("price", medicine.price);
  }, [medicine]);

  function handleCancel() {
    navigate("/pharmacy/medicines");
  }

  async function performSubmit(data) {
    await editMedicineDetails(medicineId, data);
    navigate("/pharmacy/medicines");
  }

  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-6">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Medicines </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Edit Medicine</li>
              </ul>
            </div>
            <div class="col-sm-5 col-6 text-end">
              <Link
                to="/pharmacy/medicines"
                class="btn btn-primary btn-rounded"
              >
                <IoArrowBackOutline /> Return Back
              </Link>
            </div>
          </div>
        </div>

        <div className=" container-fluid ">
          <div className="col-xl-12 ">
            <div className="card invoice-info-card">
              <div className="card-body">
                <div className="invoice-item invoice-item-one">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img
                          src="/public/images/logo/care-sync-unity-logo.png"
                          alt="logo"
                        />
                      </div>
                      <div className="invoice-head">
                        <h2>Edit Medicine</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-item invoice-item-two">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text-one"></strong>
                        <h6 className="invoice-name"></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit(performSubmit)}>
                  <div className="row">
                    <div className="col-12 col-md-12 col-xl-3">
                      <div className="input-block local-forms">
                        <label>
                          Medicine Name
                          <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="ex: Panadol"
                          required
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-xl-2">
                      <div className="input-block local-forms">
                        <label>
                          Quantity
                          <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("quantity")}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-xl-2">
                      <div className="input-block local-forms">
                        <label>
                          Expiration Date
                          <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          {...register("expirationDate")}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-xl-2">
                      <div className="input-block local-forms">
                        <label>
                          Price
                          <span className="login-danger">*</span>
                        </label>

                        <input
                          type="number"
                          placeholder="ex: 150"
                          className="form-control select"
                          fdprocessedid="m7xaqs"
                          {...register("price")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary cancel-form"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMedicineTuple;
