import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import AddNewContact from './AddNewContact'
import Callback from './Callback'
import LogIn from './LogIn'
//import auth0 from './Auth0'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <script
          type="text/javascript"
          src="node_modules/auth0-js/build/auth0.js"
        />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/addNewContact" component={AddNewContact} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/callback" component={Callback} />
        </div>
      </Router>
    )
  }
}

export default App
