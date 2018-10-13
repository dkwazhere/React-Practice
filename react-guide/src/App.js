import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 200 },
      { name: 'Stephanie', age: 290 },
      { name: 'Joanne', age: 25 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working...</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
