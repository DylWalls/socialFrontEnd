import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Login = ({ createUser, deleteUser }) => {
    const [user, setUser] = useState({name:"", email:"", password:""});
   

  
  
    const submitHandler = (e) => {
      e.preventDefault();

    };
  
    const loginUser = async ()=>{
      await axios.post('http://localhost:5000/api/auth',{
        
        email:"",
        password:"",
      })
      .then((res)=> {
        console.log(res.data)
        localStorage.setItem("token", res.data)
        console.log("Success")
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
        email:"",
        password:""
     };
      axios.post('http://localhost:5000/api/users', user)
          .then(response => setUser(response.data));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

    return(
        <div>
        <h2>Log In</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input
            type="email"
            name="email"
            placeholder="email..."
            onChange={e=> setUser({...user, email: e.target.value})} 
            />
          </div>
          <div>
            <input
            type="password"
            name="password"
            placeholder="password..."
            onChange={e=> setUser({...user, password: e.target.value})} 
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