import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const fetchFoods = async () => {
    const res = await axios.get("http://localhost:5000/api/foods");
    setFoods(res.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const addToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added To Cart");
  };

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(foods.map((food) => food.category))];

  return (
    <div className="container">
      <h1>Order Your Favourite Food</h1>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="food-grid">
        {filteredFoods.map((food) => (
          <div className="card" key={food._id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>Category: {food.category}</p>
            <p>₹{food.price}</p>
            <button onClick={() => addToCart(food)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
