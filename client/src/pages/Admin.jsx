import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

  const [foodData, setFoodData] = useState({
    name: "",
    price: "",
    image: "",
    category: ""
  });

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const fetchAllOrders = async () => {
    try {
      const user = getUser();

      if (!user || user.role !== "admin") {
        alert("Only admin can view orders");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/orders/admin/all", {
        role: user.role
      });

      setOrders(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Cannot fetch orders");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const user = getUser();

      if (!user || user.role !== "admin") {
        alert("Only admin can update status");
        return;
      }

      await axios.put(`http://localhost:5000/api/orders/admin/status/${id}`, {
        status,
        role: user.role
      });

      alert("Status Updated");
      fetchAllOrders();
    } catch (error) {
      alert(error.response?.data?.message || "Status update failed");
    }
  };

  const handleFoodChange = (e) => {
    setFoodData({
      ...foodData,
      [e.target.name]: e.target.value
    });
  };

  const addFood = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("Logged user:", user);

    if (!user || user.role !== "admin") {
      alert("Only admin can add food");
      return;
    }

    await axios.post("http://localhost:5000/api/foods", {
      ...foodData,
      price: Number(foodData.price),
      role: user.role
    });

    alert("Food Added Successfully");

    setFoodData({
      name: "",
      price: "",
      image: "",
      category: ""
    });
  } catch (error) {
    console.log(error.response?.data || error);
    alert(error.response?.data?.message || "Food add failed");
  }
};

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <div className="card">
        <h2>Add Food Item</h2>

        <input
          name="name"
          placeholder="Food name"
          value={foodData.name}
          onChange={handleFoodChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={foodData.price}
          onChange={handleFoodChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={foodData.image}
          onChange={handleFoodChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={foodData.category}
          onChange={handleFoodChange}
        />

        <button onClick={addFood}>Add Food</button>
      </div>

      <h2>All Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div className="card" key={order._id}>
            <h3>Total: ₹{order.totalAmount}</h3>

            <p>
              Current Status: <strong>{order.status}</strong>
            </p>

            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} - ₹{item.price}
              </p>
            ))}

            <select
              value={order.status}
              onChange={(e) => updateStatus(order._id, e.target.value)}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Preparing">Preparing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;