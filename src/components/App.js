import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./NavBar";
import Register from "./Register/RegisterUser";
import Profile from "./ProfilePage/Profile"
import List from "./Friends/List";
import Home from "./NewsFeed/Home";

const App = () => {
  return (
    <Router>
      <div>
        <h1> Social Seniors </h1>
        <NavBar />
        <Switch>
           <Route path="/" exact component={Home}/>
            <Route path="/list" exact component={List}/>
            <Route path='/profile' component={Profile}/>
          <Route path="/register" component={Register} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
