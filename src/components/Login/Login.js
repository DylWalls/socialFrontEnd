import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Login = ({ createUser, deleteUser }) => {
    const [user, setUser] = useState({});
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

  
  
    const submitHandler = (e) => {
      e.preventDefault();

    };
  
    const loginUser = async ()=>{
      await axios.post('http://localhost:5000/api/auth',{
        email:email,
        password: password,
      })
      .then((res)=> {
        console.log(res.data)
        localStorage.setItem("token", res.data)
        console.log(`Success ${localStorage.getItem("token")}`)
      })
      .catch(error => console.log(error));
      console.log(user)
    }

    const logOut = (() => {
      console.log(logOut)

    })

    return(
        <div>
        <h2>Log In</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input
            type="email"
            name="email"
            placeholder="email..."
            onChange={e=> setEmail(e.target.value)} 
            />
          </div>
          <div>
            <input
            type="password"
            name="password"
            placeholder="password..."
            onChange={e=> setPassword(e.target.value)} 
            />
          </div>
          <div>
            <button onClick={()=>{loginUser()}} >Login</button>
          </div>
        </form>
        </div>
    )
}
export default Login;