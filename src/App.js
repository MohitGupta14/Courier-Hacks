// npm i react-router-dom

/*Functionalities to add:

    Set up user authentication
    Send emails, sms, whatsapp, slack
    Send mails/sms to multiple people at a time
    Add card views with functionalities of sending and editing cover letters, resume, Application to manager
    Send emails with templates

*/
import React, { Component } from 'react';

import './App.css';
import { Form } from './Form';
import Navbar from './Navbar';
import { About } from './About';
import { Home } from './Home';
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
      <Route path="/" element= {<Home/>}></Route>
      <Route exact path="/about" element= {<Form/>}></Route>
      </Switch>
      </div>

      </BrowserRouter>

     
      
    );
  }
}

export default App;

