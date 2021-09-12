import React, { useState } from "react";
import axios from "axios";

const Register = ({ createNewUser, newError }) =>  {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const createUser = user =>{
    console.log(user)

  }
  
  const submitHandler = (e) => {
    e.preventDefault();

    createUser(user)

  };

  const registerUser = async () => {
    await axios.post('http://localhost:5000/api/users',{
      userName: userName,
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res)
      setUser(res);
    })
    .catch(error => console.log(error));

  }

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input type="email" name="email" placeholder="email..." onChange ={e=> setEmail(e.target.value)}/>
          </div>
          <div>
            <input type="name" name="name" placeholder="userName..." onChange={e=> setUserName(e.target.value)}/>
          </div>
            <div>
            <input type="password" name="password" placeholder="password..." onChange={e=> setPassword(e.target.value)}/>
          </div>
          <div>
            <button onClick={()=>{registerUser()}} >Register</button>
          </div>
        </form>
    </div>
  );
};

export default Register;
