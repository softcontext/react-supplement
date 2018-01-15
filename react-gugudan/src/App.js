import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  render() {
    let enters = "All\nI\nwant\nis\nenter";
    return (<div>
      <h3>{enters}</h3>
      <br/>
      <h3>{enters.replace(/\n/g, '<br/>')}</h3>
      <br/>
      <h3 dangerouslySetInnerHTML={{__html: enters.replace(/\n/g, '<br/>')}}></h3>
      <br/>
      <h3>{
        enters.split('\n').map(line => {
          return (<span>{line}<br/></span>)
        })
      }</h3>
    </div>);
  }
}
