import React, { Component } from 'react'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class Contacts extends Component {
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

  render() {
    return (
      <div>
        <div className="AddEditDeleteContactsTab">
          <h4>ADD/EDIT/DELETE CONTACTS</h4>
        </div>
        <div className="ContactsContainer">
          <table className="ContactsTable">
            <tbody>
              <tr>
                <th>FIRST</th>
                <th>LAST</th>
                <th>PHONE</th>
                <th>EMAIL</th>
              </tr>
              {this.state.allContacts.map(people => {
                return (
                  <tr>
                    <td>{people.firstName}</td>
                    <td>{people.lastName}</td>
                    <td>{people.phoneNumber}</td>
                    <td>{people.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Contacts
