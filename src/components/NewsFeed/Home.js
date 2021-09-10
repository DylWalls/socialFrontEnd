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
      <input type="text" name="text" placeholder="Post Status...." />
      </form>
      <h2>News Feed</h2>
      <h4>Stacked cards displaying friend's status and post's</h4>
    </div>
  );
};

export default Home;