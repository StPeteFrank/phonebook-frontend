import React, { Component } from 'react'
import axios from 'axios'

class DeleteContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allContacts: [],
      deleteContact: [],
      contactIDsSelectedForDelete: []
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  cancelButton = () => {
    window.location = '/contacts'
  }
  //Delete by list not working 5/19/19
  _selectContactForDeletion = event => {
    const selectedContactID = event.target.value

    if (this.state.contactIDsSelectedForDelete.includes(selectedContactID)) {
      const newIDs = this.state.contactIDsSelectedForDelete.filter(
        id => id != selectedContactID
      )

      this.setState({ contactIDsSelectedForDelete: newIDs })
    } else {
      const newIDs = this.state.contactIDsSelectedForDelete.concat([
        selectedContactID
      ])
      this.setState({ contactIDsSelectedForDelete: newIDs })
    }
  }

  deleteSelectedContacts = () => {
    axios
      .delete('https://localhost:5001/api/people/list', {
        headers: {
          contentType: 'application/json'
        },
        data: {
          peopleIds: this.state.contactIDsSelectedForDelete
        }
      })
      .then(() => this.loadAllContacts())
    window.location = '/contacts'
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
                    value={people.id}
                    onClick={this._selectContactForDeletion}
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
              <button onClick={this.cancelButton}>CANCEL</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default DeleteContact
