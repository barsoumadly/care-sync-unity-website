function MedicineTuple({ medicine }) {
  return (
    <>
      <td>{medicine.name}</td>
      <td>{medicine.duration}</td>
    </>
  );
}

export default MedicineTuple;
