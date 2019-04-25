import React, { Component } from 'react'
import axios from 'axios'

class DeleteContact extends Component {
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
        <h2>Delete Contacts</h2>
        <div className="DeleteContactsContainer">
          <section className="DeleteContacts">
            <p>Select Contacts</p>
            {this.state.allContacts.map(people => {
              return (
                <div className="ListedContacts" key={people.id}>
                  <input
                    className="DeleteCheckbox"
                    type="checkbox"
                    // value={employee.id}
                    // onClick={this._selectEmployeeForDeletion}
                  />
                  <label>
                    {people.firstName} {people.lastName}
                  </label>
                </div>
              )
            })}
            <div className="DeleteContactButton">
              <button onClick={this.deleteSelectedContacts}>
                DELETE CONTACT
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default DeleteContact
