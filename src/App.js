// npm i react-router-dom

import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Form } from './Form';
import Navbar from './Navbar';
import { About } from './About';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        
        <Navbar/>

      <div className="App">
      <Switch>
      <Route path="/" element= {<Form/>}></Route>
      <Route exact path="/about" element= {<About/>}></Route>
      </Switch>
      </div>

      </BrowserRouter>

     
      
    );
  }
}

export default App;


//   <form action="/" method="POST">
// <div className="form-group">
// <div>
//   <div className="form-group">
//     <label forName="Name">Subject</label>
//     <input type="text" className="form-control" name="subject" autocomplete="off" required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="body">Email address</label>
//     <input type="text" className="form-control" name="body" autocomplete="off" required />
    
//   </div>
//   <div className="form-group">
//     <label htmlFor="body">body</label>
//     <input type="text" className="form-control" name="content" autocomplete="off" required />
//   </div>

//   <button type="submit" className="btn btn-primary" name="button">Submit</button>
//   </div>
//   </div>
//   </form>
