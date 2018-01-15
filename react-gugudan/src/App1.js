import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  render() {
    var trs = [];
    var tds = [];

    for (var i = 1; i <= 9; i++) {
      for (var j = 1; j <= 9; j++) {
        tds.push(<td className="text-center" key={j}>{j}x{i}={i * j}</td>);
      }
      trs.push(<tr key={i}>{tds.map((item, i) => (item))}</tr>);
      tds.length = 0;
    }

    // var cache = [];
    // var result = JSON.stringify(trs, function(key, value) {
    //   if (typeof value === 'object' && value !== null) {
    //     if (cache.indexOf(value) !== -1) {
    //       return;
    //     }
    //     cache.push(value);
    //   }
    //   return value;
    // });
    // console.log(result);

    return (<div>
      <table className="table table-striped">
        <Header />
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>);
  }
}

let Header = () => {
  var html = [];
  for (var i = 1; i <= 9; i++) {
    html.push(<th className="text-center" key={i}>{i}</th>);
  }

  return (
    <thead>
      <tr>{html}</tr>
    </thead>
  );
};
