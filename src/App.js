import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {

    return (
      
      <div className="App">
        <form action="/" method="POST">
        <div className="form-group">
          <div>
            <div className="form-group">
              <label forName="Name">Subject</label>
              <input type="text" className="form-control" name="subject" autocomplete="off" required />
            </div>
            <div className="form-group">
              <label htmlFor="body">Email address</label>
              <input type="text" className="form-control" name="body" autocomplete="off" required />
              
            </div>
            <div className="form-group">
              <label htmlFor="body">body</label>
              <input type="text" className="form-control" name="content" autocomplete="off" required />
            </div>
            <button type="submit" className="btn btn-primary" name="button">Submit</button>
            </div>
            </div>
            </form>
      </div>
      
    );
  }
}

export default App;
