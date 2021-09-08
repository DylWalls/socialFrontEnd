import axios from "axios";
import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";


function App(){
    return(
        <div>
            <h1> Hello world</h1>
        {/*    <NavBar/> 
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/list" exact component={List}/>
                <Route path='/profile' component={ProfileScreen}/>
                <Route path='/not-found' component={NotFound}/>
                <Route path='/' exact component={LandingScreen}/>
                <Redirect to='/not-found'/>
        </Switch>*/}
        </div>
    );
}

export default App;