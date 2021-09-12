import React, { useState, useEffect } from 'react';
import axios from 'axios';
import e from 'cors';


const Login = ({ createUser, deleteUser }) => {
    const [user, setUser] = useState({name:"", email:"", password:""});
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
  
    const submitHandler = (e) => {
      e.preventDefault();

    };
  
    const loginUser = async ()=>{
      await axios.post('http://localhost:5000/api/auth',{
        
        email:email,
        password:password
      })
      .then((res)=> {
        console.log(res.data)
        localStorage.setItem("token", res.data)
        console.log(user)
      })
      .catch(error => console.log(error));
      console.log(user)
    }

    const logOut = (() => {
      console.log(logOut)

    })

    useEffect(() => {
      // POST request using axios inside useEffect React hook
      const user = {
        email:email,
        password:password
     };
      axios.post('https://localhost:5000/api/users', user)
          .then(response => setUser(response.data));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [email,password]);

    return(
        <div>
        <h2>Log In</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input
            type="email"
            name="email"
            placeholder="email..."
            onChange={useState.handleChange}
            />
          </div>
          <div>
            <input
            type="name"
            name="name"
            placeholder="Username..."
            />
          </div>
            <div>
            <input
            type="password"
            name="password"
            placeholder="password..."
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