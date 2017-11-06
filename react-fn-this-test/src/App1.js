import React, {Component} from 'react';

class App extends Component {
  click1() {
    console.log(Object.getOwnPropertyNames(App.prototype));
    // ["constructor", "click1", "click2", "render"]
    alert('click1');
  }
  click2() {
    console.log(this); // undefined
    alert('click2');
  }
  // ES6 React.Component
  // doesn't auto bind methods to itself.
  // You need to bind them yourself in constructor.
  click3 = () => {
    console.log(Object.getOwnPropertyNames(App.prototype));
    //  ["constructor", "click1", "click2", "render"]
    console.log(Object.getOwnPropertyNames(this));
    // ["props", "context", "refs", "updater", "click3", "_reactInternalFiber", "_reactInternalInstance", "state"]
    console.log(this.__proto__ === App.prototype); // true
    alert('click3');
  }
  render() {
    return (
      <div>
        <h3>this in function</h3>
        <button onClick={this.click1}>click1</button>
        <button onClick={this.click2}>click2</button>
        <button onClick={this.click3}>click3</button>
      </div>
    );
  }
}

export default App;
