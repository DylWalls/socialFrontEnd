import React, { useState , useEffect} from "react";
import axios from "axios";

const Register = ({ createNewUser, newError }) =>  {
  const [user, setUser] = useState({userName:"", email:"", password:""})
  const [error,setError] = useState("");

  const createUser = userInput =>{
    console.log(userInput)
  }
  
  // const handleChange = (event) => {
  //   setNewUser(event.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    createUser(user)

  };

  const registerUser = async()=>{
    await axios.post('http://localhost:5000/api/users',{
      userName: "",
      email: "",
      password: "",
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
      userName:"",
      email: "",
      password:"",
   };
    axios.post('https://localhost:5000/api/users', user)
        .then(response => setUser(response.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input type="email" name="email" placeholder="email..." onChange={e=> setUser({...user, email: e.target.value})} value={user.email} />
          </div>
          <div>
            <input type="name" name="name" placeholder="userName..." onChange={e=> setUser({...user, userName: e.target.value})} value={user.userName}/>
          </div>
            <div>
            <input type="password" name="password" placeholder="password..." onChange={e=> setUser({...user, password: e.target.value})} value={user.password}  />
          </div>
          <div>
            <button onClick={()=>{registerUser()}} >Login</button>
          </div>
        </form>
    </div>
  );
};

export default Register;
