import { MdLibraryAdd } from "react-icons/md";

function DynamicMedicineTuple({ fields, medicineList, setMedicineList }) {
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...medicineList];
    list[index][name] = value;
    setMedicineList(list);
  };

  const handleServiceAdd = () => {
    setMedicineList([...medicineList, {}]);
  };

  const handleServiceRemove = (index) => {
    const list = [...medicineList];
    list.splice(index, 1);
    setMedicineList(list);
  };

  return (
    <>
      {medicineList.map((singleService, index) => (
        <tr key={index}>
          <td className="col-12 col-md-6 col-xl-4">
            <input
              className="form-control"
              type="text"
              required
              name={fields.f1.toLowerCase()}
              value={singleService[fields.f1]}
              onChange={(e) => handleServiceChange(e, index)}
            />
          </td>
          {fields.f2 && (
            <td className="col-12 col-md-2 col-xl-1">
              <input
                className="form-control datetimepicker"
                type="text"
                name={fields.f2.toLowerCase()}
                onChange={(e) => handleServiceChange(e, index)}
                value={singleService[fields.f2]}
              />
            </td>
          )}
          {fields.f3 && (
            <td className="col-12 col-md-2 col-xl-1">
              <input
                className="form-control datetimepicker"
                type="text"
                name={fields.f3.toLowerCase()}
                value={singleService[fields.f3]}
                onChange={(e) => handleServiceChange(e, index)}
              />
            </td>
          )}
          {fields.f4 && (
            <td className="col-12 col-md-8 col-xl-8">
              <input
                className="form-control"
                type="text"
                name={fields.f4.toLowerCase()}
                value={singleService[fields.f4]}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
            </td>
          )}
          {medicineList.length - 1 === index && (
            <td className="col-12 col-md-6 col-xl-2">
              <div className="doctor-submit">
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  style={{ minWidth: "0", borderRadius: "50px" }}
                  className="btn btn-primary submit-list-form me-2"
                >
                  <MdLibraryAdd />
                </button>
              </div>
            </td>
          )}
          {medicineList.length !== 1 && (
            <td className="col-12 col-md-6 col-xl-2">
              <div className="doctor-submit">
                <button
                  type="button"
                  style={{ minWidth: "0", borderRadius: "50px" }}
                  onClick={() => handleServiceRemove(index)}
                  className="btn btn-primary submit-list-form me-2"
                >
                  &times;
                </button>
              </div>
            </td>
          )}
        </tr>
      ))}
    </>
  );
}

export default DynamicMedicineTuple;
