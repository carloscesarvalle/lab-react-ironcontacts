// -----------------------------------------------------------------------------------------------------------
// This solution uses hooks

import React, {useState} from 'react';
import contacts from './contacts.json';

const App = () => {

//Using the spread operator to make a copy of the array named Contacts. After I sliced up the first 5 and set the state with them. 

let firstFive = [...contacts].slice(0,5)
const [state, setState] = useState(firstFive)

//Using the spread operator to make a copy of the array named Contacts. I sliced up from element with index 6 and up.
let restOfCelebrities = [...contacts].slice(6)

//Using Math Js library to select a random element from the array. It's a random number based on a random index position.  
let randomCelebrity = restOfCelebrities[Math.floor(Math.random()*restOfCelebrities.length)]

//Creating a function called displayFirstFive to display the first 5 celebrities on DOM
let displayFirstFive = firstFive.map((each, i)=> {return <tr key={each.id}><td><img src={each.pictureUrl} alt="no photo"/></td><td>{each.name}</td><td>{each.popularity}</td></tr>})

//Creating a function that's going to push a random celebrity into the state (original array with 5 celebrities)
const addRandomCelebrity = () => {
  console.log("I'm ckicking")
  let newArray = firstFive.push(randomCelebrity)
  setState(newArray)
  console.log(state)
}


  return (
    <div>
      <button onClick={()=>addRandomCelebrity()}>Add Random Contact</button>
      <table>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </tr>
        <th>
        {displayFirstFive}
        </th>
      </table>
    </div>
  );
};

export default App;



// -----------------------------------------------------------------------------------------------------------
// This solution uses class components

// import React, { Component } from 'react';
// import contacts from './contacts.json';
// import 'bulma/css/bulma.css';

// class App extends Component {

//   state = {
//     showingContacts: [...contacts].splice(0,5),
//     restOfContacts: [...contacts].splice(5)
//   }


// Function to show contacts in the DOM

// showContact = () => {
//   let contactList = this.state.showingContacts.map((eachContact, i)=>{
//         return <tr key={eachContact.id}>
//           <td><img style={{width:"80px"}} src={eachContact.pictureUrl} alt={eachContact.name}></img></td>
//           <td>{eachContact.name}</td> 
//           <td>{eachContact.popularity}</td>
//           <td><button onClick={()=>this.deleteButton(i)}>Delete</button></td>
//         </tr>
//   })
//   return contactList
// }

// Function to add random contact button

// addRandomContact = () => {

//   let randomIndex = Math.floor(Math.random()*this.state.restOfContacts.length)
//   let restOfContactsCopy = [...this.state.restOfContacts]
//   let showingContactsCopy = [...this.state.showingContacts]

//   showingContactsCopy.push(restOfContactsCopy[randomIndex])
//   restOfContactsCopy.splice(randomIndex,1)

//   this.setState ({
//     showingContacts: showingContactsCopy,
//     restOfContacts: restOfContactsCopy
//   })
// }

// Function to sort by name button

// sortByName = () => {
  
//   let showingContactsCopy = [...this.state.showingContacts]
//   showingContactsCopy.sort((a,b) => (a.name > b.name)? 1 : -1)

//   this.setState({
//     showingContacts: showingContactsCopy
//   })

// }

//Function to sort by popularity button

// sortByPopularity = () => {
  
//   let showingContactsCopy = [...this.state.showingContacts]
//   showingContactsCopy.sort((a,b) => b.popularity - a.popularity)

//   this.setState({
//     showingContacts: showingContactsCopy
//   })
// }

// Add delete button

// deleteButton = (index) => {
//   console.log(index, this.state.showingContacts[index])
//   let showingContactsCopy = [...this.state.showingContacts]
//   showingContactsCopy.splice(index,1)

//   this.setState({
//     showingContacts:showingContactsCopy,
//   })
  

  
// }


// display in the DOM

// render() {

  // console.log(this.state.showingContacts, this.state.restOfContacts)

//     return (

//       <div>

//             <button onClick={this.addRandomContact}>Add Random Contact</button>
//             <button onClick={this.sortByName}>Sort by name</button>
//             <button onClick={this.sortByPopularity}>Sort by popularity</button>
//             <table>
//             <thead>
//             <tr>
//               <th>Pictures</th>
//               <th>Name</th> 
//               <th>Popularity</th>
//               <th>Action</th>
//             </tr>
//             </thead>
//             <tbody>
//               {this.showContact()}
//             </tbody>
//             </table>
        
//       </div>
//     );
//   }
// }

// export default App;
