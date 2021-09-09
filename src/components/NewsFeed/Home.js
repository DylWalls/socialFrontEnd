import React, { useState } from "react";

const Home = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>Most recent</h2>
      <form>
        
      </form>
    </div>
  );
};

export default Home;