import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 200 },
      { name: 'Stephanie', age: 290 },
      { name: 'Joanne', age: 25 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked');
    // dont do this -> this.state.persons[0].name = '김장혁';
    this.setState({    
      persons: [
      { name: newName, age: 26 },
      { name: '스태파니', age: 29 },
      { name: '김재원', age: 27 }
    ] })
  }

  nameChangedHandler = (event) => {
    this.setState({    
      persons: [
      { name: "dk", age: 2600 },
      { name: event.target.value, age: 29 },
      { name: 'HelloKitty', age: 27 }
    ] })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    } 

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person 
          name={person.name}
          age={person.age} />
        })}
      </div> 
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working...</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Names</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
