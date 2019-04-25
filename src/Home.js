import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="TitleContainer">
          <h1>Phone Book</h1>
        </div>
        <div className="Tabs">
          <Link to="/contacts">
            <button>CONTACTS</button>
          </Link>
          <Link to="/login">
            <button>LOG IN</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
