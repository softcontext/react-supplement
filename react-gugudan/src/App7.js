import React, {Component} from 'react';
import './App.css';

var data = {
  fruits: [
    {id:1, name:'banana'},
    {id:2, name:'orange'},
    {id:3, name:'apple'}
  ]
};

export default class App extends Component {
  render() {
    // WHEN: {data.fruits.map((item, i) => (item))}
    // Objects are not valid as a React child (found: object with keys {id, name}).
    // If you meant to render a collection of children, use an array instead.
    return (<div>
      <ul>
        {data.fruits.map((item, i) => (<li>{item.id} : {item.name}</li>))}
      </ul>
      <hr/>
      {data.fruits.map((item, i) => (<span>{item.id} : {item.name}<br/></span>))}
    </div>);
  }
}
