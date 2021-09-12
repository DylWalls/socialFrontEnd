import React, { useState } from "react";
import './Home.css';

const Home = ({ createUser, deleteUser }) => {
  const [User, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  return (
    <div class="row:after">
      <div class='column side'>
        <h2>Friends List</h2>
      </div>
      <div class="column middle">
        <h2>News Feed</h2>
        <h4>Stacked cards displaying friend's status and post's</h4>
      </div> 
      <div class="column side"> 
        <h2>Lets post an update!</h2> 
        <form>
          <input type="text" name="text" placeholder="Post Status...." />
        </form>
      </div>
    </div>
  );
};

export default Home;