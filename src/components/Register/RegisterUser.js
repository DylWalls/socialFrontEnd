import React, { useState } from "react";

const Register = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>Register Here</h2>
      <Register />
      <form>
        <input>Username:</input>
      </form>
    </div>
  );
};

export default Register;
