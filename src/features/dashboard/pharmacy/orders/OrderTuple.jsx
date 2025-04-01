import { useNavigate } from "react-router-dom";
import { editMedicineOrderStatus } from "../../../../services/medicineOrders";

function OrderTuple({ order, orderNumber, ordersNum }) {
  const navigate = useNavigate();

  const calculateOrderNumber = function (order) {
    const orderNum = ordersNum - order === 0 ? 1 : ordersNum - order + 1;
    localStorage.setItem("orderNumber", orderNum);
  };

  const handleStatus = async function () {
    await editMedicineOrderStatus(order._id, {
      status: "delivered",
      paymentType: "paid",
    });
  };

  return (
    <tr>
      <td>#{orderNumber}</td>
      <td>{order.userId.name}</td>
      <td>{order.userPhoneNumber}</td>
      <td>{order.userAddress}</td>
      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
      <td>
        {order.paymentType === "paid" ? (
          <span className="badge bg-success-light">Paid</span>
        ) : (
          <span className="badge status-red">Un Paid</span>
        )}
      </td>
      <td>
        <div className="dropdown action-label">
          {order.status === "pending" ? (
            <button
              className="custom-badge book-btn"
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/pharmacy/medicine-orders/${order._id}`);
                calculateOrderNumber(orderNumber);
              }}
            >
              Show Order
            </button>
          ) : order.status === "on the way" ? (
            <button
              className="custom-badge book-btn"
              style={{ marginRight: "20px" }}
              onClick={handleStatus}
            >
              Deliver
            </button>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

export default OrderTuple;
