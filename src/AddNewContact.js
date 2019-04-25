import React, { Component } from 'react'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

// addEmployeeToApi = e => {
//   e.preventDefault()
//   axios
//     .post(config.API_URL + '/employees', {
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       phoneNumber: this.state.phoneNumber,
//       emailAddress: this.state.emailAddress
//     })
//     .then(() => {
//       window.location.href = '/employees'
//     })
// }

class AddNewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allContacts: []
    }
  }

  addContactToPeopleDB = e => {
    e.preventDefault()
    axios
      .post('https://localhost:5001/api/people', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email
      })
      .then(() => {
        window.location.href = '/contacts'
      })
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <p>Last</p>
            <div className="AddLast">
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <p>Phone Number</p>
            <div className="AddPhone">
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>
            <p>Email</p>
            <div className="AddEmail">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="AddNewContactButton">
              <button onClick={this.addContactToPeopleDB}>ADD CONTACT</button>
              <button onClick={this.cancelButton}>CANCEL</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewContact
