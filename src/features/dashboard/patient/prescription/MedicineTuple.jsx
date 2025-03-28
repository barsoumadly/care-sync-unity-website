function MedicineTuple({ medicine }) {
  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.duration}</td>
      <td>{medicine.dosages}</td>
      <td>{medicine.intakeMethod}</td>
    </tr>
  );
}

export default MedicineTuple;
