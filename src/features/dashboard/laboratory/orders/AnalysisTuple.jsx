import { useNavigate } from "react-router-dom";

function OrderTuple({ order, orderNumber }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>#{orderNumber}</td>
      <td>{order.userName}</td>
      <td>{order.userPhoneNumber}</td>
      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
      <td>
        <div className="dropdown action-label">
          {order.status === "processing" ? (
            <a className="custom-badge status-purple">Processing</a>
          ) : (
            <a className="custom-badge status-green">Completed</a>
          )}
        </div>
      </td>
      <td>
        <div className="dropdown action-label">
          {order.status === "processing" ? (
            <button
              className="custom-badge book-btn"
              style={{ marginRight: "20px" }}
              onClick={() =>
                navigate(`/laboratory/analysis-orders/${order._id}`)
              }
            >
              Show Order
            </button>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

export default OrderTuple;
