import React, { useState , useEffect} from "react";
import axios from "axios";

const Register = ({ createUser, deleteUser }) => {
  const [user, setUser] = useState({});

  // const handleChange = (event) => {
  //   setNewUser(event.target.value);
  // };

  

  const registerUser = ()=>{
    axios.post('http://localhost:5000/api/users',{
      userName:"Dylan,Asia,Zach,caleb" ,
      email:"Dylan,Asia,Zach,caleb@gmail.com",
      password:"Dylan,Asia,Zach,caleb"
    })
    .then(response=> setUser(response.data))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const user = {
      userName: "",
      email:"",
      password:""
   };
    axios.post('https://localhost:5000/api/users', user)
        .then(response => setUser(response.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div>
      <h2>Register Here</h2>

      <button onClick={()=>{registerUser()}}>Register</button>
     {/*() <form >
        <ul>
          <input
            type="email"
            name="email"
            placeholder="email..."
           
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
          <button onClick={registerUser}>Login</button>
        </ul>
      </form>
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
          <button type="submit" onSubmit="">
            Log In
          </button>
        </ul>
     </form>*/}
    </div>
  );
};

export default Register;
