import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Login = ({ createUser, deleteUser }) => {
    const [user, setUser] = useState({});
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
  
    // const handleChange = (event) => {
    //   setNewUser(event.target.value);
    // };
  
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
        <form onSubmit={useState.handleSubmit}>
          <ul>
            <input
              type="email"
              name="email"
              placeholder="email..."
              onChange={useState.handleChange}
            />
            <input
            type="name"
            name="name"
            placeholder="Username..."
            />
            <input
            type="password"
            name="password"
            placeholder="password..."
            />
            <button onClick={()=>{loginUser()}} >Login</button>
          </ul>
       </form>
            
        </div>
    )
}
export default Login;