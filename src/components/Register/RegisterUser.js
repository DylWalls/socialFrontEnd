import React, { useState } from "react";

const Register = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>Register Here</h2>
      <form onSubmit={useState.handleSubmit}>
        <input type="text" onChange={useState.handleChange}/>
        <input type="text" value="create unique username"/>
        <input type="text" value="create unique password including one number, one capital leter, one symbol, and at least 8 characters."/>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
