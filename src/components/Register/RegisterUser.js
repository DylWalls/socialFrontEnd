import React, { useState , useEffect} from "react";
import axios from "axios";

const Register = ({ createUser, deleteUser }) => {
  const [user, setUser] = useState({})
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (event) => {
  //   setNewUser(event.target.value);
  // };


  const registerUser = async()=>{
    await axios.post('http://localhost:5000/api/users',{
      userName: userName,
      email: email,
      password: password,
    })
    .then((res)=> {
      setUser(res)
      console.log(user)
    })
    .catch(error => console.log(error));

  }

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const user = {
      userName:userName,
      email:email,
      password:password
   };
    axios.post('https://localhost:5000/api/users', user)
        .then(response => setUser(response.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [userName,email,password]);

  return (
    <div>
      <h2>Register Here</h2>

      <button onClick={()=>{registerUser()}}>Register</button>
     () <form >
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
          <button onClick={()=>{registerUser()}}>Register</button>
        </ul>
      </form>
     
    </div>
  );
};

export default Register;
