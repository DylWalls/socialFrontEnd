import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Login = ({ createUser, deleteUser }) => {
    const [user, setUser] = useState({});
  
    // const handleChange = (event) => {
    //   setNewUser(event.target.value);
    // };
  
    const loginUser = ()=>{
      axios.post('http://localhost:5000/api/users/post',{
        userName:"Dylan,Asia,Zach,caleb" ,
        email:"Dylan,Asia,Zach,caleb@gmail.com",
        password:"Dylan,Asia,Zach,caleb"
      })
      .then(response=> setUser(response.data))
      .catch(error => console.log(error))
  
    }

    return(
        <div>
            <button onClick={()=>{loginUser()}} >Login</button>
        </div>
    )
}
export default Login;