import React, { Component } from 'react';
import contacts from './contacts.json';

class App extends Component {

  state = {
    showingContacts: [...contacts].splice(0,5),
    restOfContacts: [...contacts].splice(5)
  }

showContact = () => {
  let contactList = this.state.showingContacts.map((eachContact, id)=>{
        return <tr key={eachContact.id}>
          <th><img style={{width:"80px"}} src={eachContact.pictureUrl} alt={eachContact.name}></img></th>
          <th>{eachContact.name}</th> 
          <th>{eachContact.popularity}</th>
        </tr>
  })
  return contactList
}

addContact = () => {

  let randomIndex = Math.floor(Math.random()*this.state.restOfContacts.length)
  let restOfContactsCopy = [...this.state.restOfContacts]
  let showingContactsCopy = [...this.state.showingContacts]

  showingContactsCopy.push(restOfContactsCopy[randomIndex])
  restOfContactsCopy.splice(randomIndex,1)

  this.setState ({
    showingContacts: showingContactsCopy,
    restOfContacts: restOfContactsCopy
  })
}

  render() {

console.log(this.state.showingContacts, this.state.restOfContacts)

    return (
      <div>

         <button onClick={this.addContact}>Add Random Contact</button>

        <table>
          <thead>
          <tr>
            <th>Pictures</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
          </thead>
        <tbody>
          {this.showContact()}
        </tbody>
        </table>
        
      </div>
    );
  }
}

export default App;
