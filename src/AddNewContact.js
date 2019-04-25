import React, { Component } from 'react'

class AddNewContact extends Component {
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
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewContact
