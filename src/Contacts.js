import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import axios from 'axios'
// import config from './Config'

class Contacts extends Component {
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
              <tr>
                <td>Frank</td>
                <td>Diaz</td>
                <td>999999999999</td>
                <td>zzz@yyy.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Contacts
