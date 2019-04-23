import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="TitleContainer">
        <h1>Phone Book</h1>
        <h2>Contacts</h2>
      </div>
      <div className="AddEditDeleteContactsTab">
        <h3>ADD/EDIT/DELETE CONTACTS</h3>
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

export default App
