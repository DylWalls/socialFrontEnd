import React, { useState } from "react";

const Home = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>Most recent</h2>
      <Home />
      <form>
        <input></input>
      </form>
    </div>
  );
};

export default Home;