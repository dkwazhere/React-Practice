import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working...</p>
        <Person name="David" age="26" />
        <Person name="Stephanie" age="29">My hobbies: Racing </Person>
        <Person name="Joan" age="25" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
