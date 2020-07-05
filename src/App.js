

import React, { Component } from 'react';
import contacts from './contacts.json';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    showingContacts: [...contacts].splice(0,5),
    restOfContacts: [...contacts].splice(5)
  }


// Function to show contacts in the DOM

showContact = () => {
  let contactList = this.state.showingContacts.map((eachContact, i)=>{
        return <tr key={eachContact.id}>
          <td><img style={{width:"80px"}} src={eachContact.pictureUrl} alt={eachContact.name}></img></td>
          <td>{eachContact.name}</td> 
          <td>{eachContact.popularity}</td>
          <td><button onClick={()=>this.deleteButton(i)}>Delete</button></td>
        </tr>
  })
  return contactList
}

// Function to add random contact button

addRandomContact = () => {

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

// Function to sort by name button

sortByName = () => {
  
  let showingContactsCopy = [...this.state.showingContacts]
  showingContactsCopy.sort((a,b) => (a.name > b.name)? 1 : -1)

  this.setState({
    showingContacts: showingContactsCopy
  })

}

//Function to sort by popularity button

sortByPopularity = () => {
  
  let showingContactsCopy = [...this.state.showingContacts]
  showingContactsCopy.sort((a,b) => b.popularity - a.popularity)

  this.setState({
    showingContacts: showingContactsCopy
  })
}

// Add delete button

deleteButton = (index) => {
  console.log(index, this.state.showingContacts[index])
  let showingContactsCopy = [...this.state.showingContacts]
  showingContactsCopy.splice(index,1)

  this.setState({
    showingContacts:showingContactsCopy,
  })
  

  
}






// display in the DOM

render() {

  // console.log(this.state.showingContacts, this.state.restOfContacts)

    return (

      <div>

            <button onClick={this.addRandomContact}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <button onClick={this.sortByPopularity}>Sort by popularity</button>
            <table>
            <thead>
            <tr>
              <th>Pictures</th>
              <th>Name</th> 
              <th>Popularity</th>
              <th>Action</th>
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
