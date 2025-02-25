import { useState } from "react";

function DynamicInput({ fields }) {
  const [serviceList, setServiceList] = useState([
    { medicine: "", duration: "", amount: "" },
  ]);
  // const [medicinesList, setMedicinesList] = useState([]);
  // const { register, handleSubmit, reset } = useForm();

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([
      ...serviceList,
      { medicine: "", duration: "", amount: "" },
    ]);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  function handleCancel() {
    setServiceList([{ medicine: "", duration: "", amount: "" }]);
  }

  function handleSubmit() {
    console.log(serviceList);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {serviceList.map((singleService, index) => (
          <>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>{fields.f1} </label>
                <input
                  className="form-control"
                  type="text"
                  name="medicine"
                  value={singleService.medicine}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms ">
                <label>{fields.f2}</label>
                <input
                  className="form-control datetimepicker"
                  type="text"
                  name="duration"
                  onChange={(e) => handleServiceChange(e, index)}
                  value={singleService.duration}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms ">
                <label>{fields.f3}</label>
                <input
                  className="form-control datetimepicker"
                  type="text"
                  name="amount"
                  value={singleService.amount}
                  onChange={(e) => handleServiceChange(e, index)}
                />
              </div>
            </div>
            {serviceList.length - 1 === index && (
              <div className="col-12 col-md-6 col-xl-2">
                <div className="doctor-submit">
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="btn btn-primary submit-list-form me-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            {serviceList.length !== 1 && (
              <div className="col-12 col-md-6 col-xl-2">
                <div className="doctor-submit">
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="btn btn-primary submit-list-form me-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-9" style={{ margin: "10px 0" }}>
          <button
            className={`btn btn-primary btn-block `}
            type="button"
            onClick={handleSubmit}
          >
            Save Prescription
          </button>
        </div>
        <div className="col-12 col-md-6 col-xl-3" style={{ margin: "10px 0" }}>
          <button
            className={`btn btn-primary btn-block `}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default DynamicInput;
