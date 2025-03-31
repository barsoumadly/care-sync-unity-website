function MedicineTuple({ medicine }) {
  return (
    <tr>
      <td>{medicine.name}</td>
      <td>{medicine.expirationDate.split("-").reverse().join("-")}</td>
      <td>
        {medicine.quantity} {medicine.quantity > 1 ? "Pieces" : "Piece"}
      </td>
      <td>{medicine.price} EGP</td>
    </tr>
  );
}

export default MedicineTuple;
