import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'
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
          {/* <div className="TitleContainer">
            <h1>Phone Book</h1>
          </div>
          <div className="Tabs">
            <Link to="/contacts">
              <button>CONTACTS</button>
            </Link>
          </div> */}

          <div />

          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/contacts" component={Contacts} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/callback" component={Callback} />
        </div>
      </Router>
    )
  }
}

export default App
