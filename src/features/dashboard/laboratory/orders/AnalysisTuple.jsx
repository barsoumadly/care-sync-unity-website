import { useNavigate } from "react-router-dom";

function OrderTuple({ order, orderNumber, ordersNum }) {
  const navigate = useNavigate();

  const calculateOrderNumber = function (order) {
    const orderNum = ordersNum - order === 0 ? 1 : ordersNum - order + 1;
    localStorage.setItem("orderNumber", orderNum);
  };

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
              onClick={() => {
                navigate(`/laboratory/analysis-orders/${order._id}`);
                calculateOrderNumber(orderNumber);
              }}
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
