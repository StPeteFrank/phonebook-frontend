import React, { Component } from 'react'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class AddNewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allContacts: []
    }
  }

  componentDidMount() {
    this.loadAllContacts()
  }

  loadAllContacts = () => {
    axios.get('https://localhost:5001/api/people').then(response => {
      this.setState({
        allContacts: response.data
      })
    })
  }
  cancelButton = () => {
    window.location = '/contacts'
  }

  render() {
    return (
      <div>
        <h2>Add New Contacts</h2>
        <div className="AddNewContactContainer">
          <section className="AddNewContact">
            <p>First</p>
            <div className="AddFirst">
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <p>Last</p>
            <div className="AddLast">
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <p>Phone Number</p>
            <div className="AddPhone">
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <p>Email</p>
            <div className="AddEmail">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <div className="AddNewContactButton">
              {/* <button onClick={this.addEmployeeToApi}>ADD EMPLOYEE</button> */}
              <button onClick={this.cancelButton}>CANCEL</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewContact
