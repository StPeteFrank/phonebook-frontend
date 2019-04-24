import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="TitleContainer">
            <h1>Phone Book</h1>
            <h2>Contacts</h2>
          </div>
          <div />

          {/* <Route exact path="/" component={Contacts} /> */}
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    )
  }
}

export default App
