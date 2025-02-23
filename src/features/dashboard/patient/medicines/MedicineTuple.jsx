function MedicineTuple({ medicine }) {
  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.pharmacyName}</td>
      <td>{medicine.expirationDate}</td>
      <td>{medicine.date}</td>
      <td>{medicine.cost}</td>
      <td>
        <div className="dropdown action-label">
          <a
            className={`custom-badge ${
              medicine.status === "on way"
                ? "status-orange"
                : medicine.status === "delivered"
                ? "status-green"
                : "status-blue"
            } `}
          >
            {medicine.status === "on way" && "On The Way"}
            {medicine.status === "delivered" && "Delivered"}
            {medicine.status === "obtained" && "Obtained"}
          </a>
        </div>
      </td>
    </tr>
  );
}

export default MedicineTuple;
