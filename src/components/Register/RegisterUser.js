import React, { useState , useEffect} from "react";
import axios from "axios";

const Register = ({ createNewUser, newError }) =>  {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const createUser = user =>{
    console.log(user)

  }
  
  // const handleChange = (event) => {
  //   setNewUser(event.target.value);
  // };

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
      localStorage.getItem("token" ,res.data)
      console.log(user)
    })
    .catch(error => console.log(error));

  }


  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const user = {
      userName: userName,
      email: email,
      password: password,
   };
    axios.post('http://localhost:5000/api/users', user)
        .then(response => setUser(response.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [userName,email,password]);

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input type="email" name="email" placeholder="email..." onChange ={e=> setUser({...user, email: e.target.value})}/>
          </div>
          <div>
            <input type="name" name="name" placeholder="userName..." onChange={e=> setUser({...user, userName: e.target.value})}/>
          </div>
            <div>
            <input type="password" name="password" placeholder="password..." onChange={e=> setUser({...user, password: e.target.value})}/>
          </div>
          <div>
            <button onClick={()=>{registerUser()}} >Register</button>
          </div>
        </form>
    </div>
  );
};

export default Register;
