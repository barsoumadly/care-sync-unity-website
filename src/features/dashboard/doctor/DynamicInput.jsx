import { useState } from "react";
import { useForm } from "react-hook-form";

function DynamicInput({ fields }) {
  const { f1, f2, f3 } = fields;
  const [serviceList, setServiceList] = useState([{ medicine: "" }]);

  const { register, handleSubmit, reset } = useForm();

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
    console.log(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { medicine: "" }]);
  };

  function handleCancel() {
    setServiceList([{ medicine: "" }]);
    reset();
  }

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {serviceList.map((singleService, index) => (
          <>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>{fields.f1} </label>
                <input
                  className="form-control"
                  type="text"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                  {...register(`medicine${index}`)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms ">
                <label>{fields.f2}</label>
                <input
                  className="form-control datetimepicker"
                  type="text"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  {...register(`duration${index}`)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-2">
              <div className="input-block local-forms ">
                <label>{fields.f3}</label>
                <input
                  className="form-control datetimepicker"
                  type="text"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  {...register(`amount${index}`)}
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
        <div className="col-12 col-md-6 col-xl-9">
          <button className={`btn btn-primary btn-block `} type="submit">
            Save Prescription
          </button>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
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
