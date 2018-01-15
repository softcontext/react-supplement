import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <h3 className="text-center">{this.props.title}</h3>
      <Table />
    </div>);
  }
}

let Table = () => {
  return (
    <table className="table table-striped">
      <Header />
      <Content />
    </table>
  );
};

let Header = () => {
  var tds = [];
  for (var i = 1; i <= 9; i++) {
    tds.push(<th className="text-center" key={i}>{i}</th>);
  }

  return (
    <thead>
      <tr>{tds}</tr>
    </thead>
  );
};

let Content = () => {
  var trs = [];
  var tds = [];

  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      tds.push(<td className="text-center" key={j}>{j}x{i}={i * j}</td>);
    }
    trs.push(<tr key={i}>
      {tds.map((item, i) => (item))}
    </tr>);
    tds.length = 0;
  }

  return (
    <tbody>
      {trs}
    </tbody>
  );
};

const data = {
  title: 'GUGUDAN'
};

const HOC = MyApp => class extends Component {
  componentDidMount() {
    this.setState({
      title: data.title
    });
  }
  render() {
    return <MyApp {...this.state} {...this.props} />;
  }
};

// export default App;
export default HOC(App);
