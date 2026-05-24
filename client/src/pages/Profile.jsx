function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="container">
        <h2>Please login first</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Profile</h1>

      <div className="card">
        <h3>Name: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Role: {user.role || "user"}</p>
      </div>
    </div>
  );
}

export default Profile;