function DynamicField({ fields, serviceList = [{}], setServiceList }) {
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  return (
    <>
      {serviceList.map((singleService, index) => (
        <div key={index} className="row">
          <div className="col-12 col-md-12 col-xl-4">
            <div className="input-block local-forms">
              <label>
                {fields.f1}
                {index > 0 ? `_${index + 1}` : ""}
                <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="M.B.B.S, M.S."
                required
                name={fields.f1.toLowerCase()}
                onChange={(e) => handleServiceChange(e, index)}
                value={singleService.duration}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-xl-4">
            <div className="input-block local-forms">
              <label>
                {fields.f2} {index > 0 ? `_${index + 1}` : ""}
              </label>
              <input
                className="form-control"
                type="text"
                name={fields.f2.toLowerCase().split(" ").join("_")}
                onChange={(e) => handleServiceChange(e, index)}
                value={singleService.duration}
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
            <div
              className="col-12 col-md-6 col-xl-2"
              style={{ marginBottom: "30px" }}
            >
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
        </div>
      ))}
    </>
  );
}

export default DynamicField;
