import axios from "axios";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };
  const handlePayment = async () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    return;
  }

  try {

    // Create order from backend
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      {
        amount: total
      }
    );

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",

      amount: data.amount,

      currency: data.currency,

      name: "Food Delivery",

      description: "Food Order Payment",

      order_id: data.id,

      handler: async function (response) {

        await placeOrder();

        alert("Payment Successful");
      },

      prefill: {
        name: user.name,
        email: user.email
      },

      theme: {
        color: "#ff4d00"
      }
    };

    const razor = new window.Razorpay(options);

    razor.open();

  } catch (error) {

    console.log(error);

    alert("Payment Failed");

  }
};


  const placeOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        userId: user._id,
        items: cart,
        totalAmount: total
      });

      localStorage.removeItem("cart");
      setCart([]);

      alert("Order placed successfully");
    } catch (error) {
      alert("Order failed");
    }
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;