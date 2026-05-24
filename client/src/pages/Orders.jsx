import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/api/orders/${user._id}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div className="card" key={order._id}>
            <h3>Order Total: ₹{order.totalAmount}</h3>
            <p>Status: {order.status}</p>

            {/* Order Status Tracking Bar */}
            <div className="tracking">
              <span className={order.status === "Order Placed" ? "active" : ""}>
                Placed
              </span>
              <span className={order.status === "Preparing" ? "active" : ""}>
                Preparing
              </span>
              <span className={order.status === "Out for Delivery" ? "active" : ""}>
                Out
              </span>
              <span className={order.status === "Delivered" ? "active" : ""}>
                Delivered
              </span>
            </div>

            {/* Ordered Items List */}
            <div className="items-list">
              {order.items?.map((item, index) => (
                <p key={index}>
                  {item.name} - ₹{item.price}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;