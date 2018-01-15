import React, {Component} from 'react';
import './App.css';

class For extends Component {
  render() {
    var start = this.props.start;
    var end = this.props.end;
    var html = [];
    for (var i = start; i <= end; i++) {
      html.push(this.props.children);
    }

    return html;
  }
}

class App extends Component {
  render() {
    return (<div>
      <For start={1} end={9}>
        <h3>11</h3>
      </For>
    </div>);
  }
}

export default App;
