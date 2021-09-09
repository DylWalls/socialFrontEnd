import React, { useState } from "react";

const List = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>Friends</h2>
      <List />
      <form>
        <input>Username:</input>
      </form>
    </div>
  );
};

export default List;