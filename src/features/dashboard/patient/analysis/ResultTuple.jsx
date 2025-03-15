function ResultTuple({ analysis }) {
  return (
    <tr>
      <td>{analysis.name}</td>
      <td>{analysis.result}</td>
      <td>{analysis.normalResult}</td>
      <td>{analysis.price} EGP</td>
    </tr>
  );
}

export default ResultTuple;
