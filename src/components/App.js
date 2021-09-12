import React, { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./NavBar";
import Register from "./Register/RegisterUser";
import Login from "./Login/Login";
import Profile from "./ProfilePage/Profile";
import List from "./Friends/List";
import Home from "./NewsFeed/Home";

const App = () => {
  const[user,setUser]= useState({});

  

  useEffect(()=>{
    const jwt = localStorage.getItem('token');

    try{
      const user =jwtDecode(jwt);
      setUser({user})

    }catch{}


  },[])


  return (
    <Router>
      <div>
     
        <h1> Social Seniors </h1>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
          <Route path="/profile"/>
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} render={props=> {
            if(!user){
              return <Redirect to ="/register"/>
            } 
            if(user){
              return <Redirect to="/" />
            }
            else{
              return <Profile {...props} user={user}/>
            }
          }}/>
          <Redirect to ="/not-found"/>
        </Switch>
      </div>
    </Router>
          );
        };

export default App;



// <Route path="/Login"render={props=>{
//   if(!user){
//     return <Redirect to="/Login"/>
//   }else{
//     return <Register {...props} user={user}/>
//   }
// }}/>
// <Redirect to="/not-found" />