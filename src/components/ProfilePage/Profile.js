import React, { useState } from "react";

const Profile = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div>

      <h2>My Profile</h2>
      <form>
        
      </form>
    </div>
  );
};

export default Profile;