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
      <td>{order.pharmacyName} Pharmacy</td>
      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
      <td>
        <div className="dropdown action-label">
          <a
            className={`custom-badge ${
              order.status === "pending"
                ? "status-purple"
                : order.status === "delivered"
                ? "status-green"
                : "status-orange"
            } `}
          >
            {order.status === "pending" && "Pending"}
            {order.status === "on the way" && "On the Way"}
            {order.status === "delivered" && "Delivered"}
          </a>
        </div>
      </td>
      <td>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            style={{ marginRight: "20px" }}
            onClick={() => {
              navigate(`/patient/medicine-orders/${order._id}`);
              calculateOrderNumber(orderNumber);
            }}
          >
            Show Order
          </button>
        </div>
      </td>
    </tr>
  );
}

export default OrderTuple;
