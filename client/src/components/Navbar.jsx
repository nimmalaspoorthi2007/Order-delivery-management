import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");

    alert("Logged out successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <div className="navbar">
      <div class="d-flex flex-column">
      <h2>Sridhar's Cloud Kitchen</h2>
      <p>Order Delivery Management</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/profile">Profile</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}

        {user ? (
          <>
            <span>
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              style={{
                background: "white",
                color: "#ff4d00",
                padding: "8px 12px"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;