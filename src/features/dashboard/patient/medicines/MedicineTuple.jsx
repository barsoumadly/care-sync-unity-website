function MedicineTuple({ medicine }) {
  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.expirationDate}</td>
      <td>{medicine.quantity} Pieces</td>
      <td>{medicine.price} EGP</td>
    </tr>
  );
}

export default MedicineTuple;
