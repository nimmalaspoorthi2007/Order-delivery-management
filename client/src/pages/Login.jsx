import axios from "axios";
import { useState } from "react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      if (isRegister) {
        await axios.post("http://localhost:5000/api/auth/register", formData);

        alert("Registration successful. Please login now.");
        setIsRegister(false);
      } else {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: formData.email,
          password: formData.password
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login successful");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1>{isRegister ? "Register" : "Login"}</h1>

      {isRegister && (
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p
        style={{ marginTop: "15px", color: "blue", cursor: "pointer" }}
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Already have account? Login" : "Create New Account"}
      </p>
    </div>
  );
}

export default Login;