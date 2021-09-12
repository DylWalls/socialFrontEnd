import axios from "axios";
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
import "./App.css";

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
        <div className='header'>
        <h1> Social Seniors </h1>
        <h1>Your #1 Senior dating App!</h1>
        </div>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
          <Route path="/profile" render={props=>{
            if(!user){
              return <Redirect to="/login"/>
            }else{
              return <Profile {...props} user={user}/>
            }
          }}
          />

          <Route path="/register" component={Register} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};



export default App;
