function MedicineTuple({ medicine }) {
  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.duration}</td>
      <td>{medicine.amount}</td>
    </tr>
  );
}

export default MedicineTuple;
