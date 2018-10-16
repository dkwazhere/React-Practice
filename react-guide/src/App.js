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
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working...</p>
        <button onClick={() => this.switchNameHandler('Chimichanga')}>Switch Names</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, '기ㅁ')}
        changed={this.nameChangedHandler}> My hobbies: Racing </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
