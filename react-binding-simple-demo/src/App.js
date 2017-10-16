import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  add = ()=>{
    // this.state.data.push(2);
    // this.forceUpdate();

    var data = this.state.data;
    data.push(3);
    this.setState({data: data});
  }

  render() {
    return (
      <div className="App">
        <Printer {...this.state} add={this.add}></Printer>
        {/*
          JS의 객체를 대상으로 스프레드연산자를 쓰지 못한다.
          JSX의 표현식에서는 가능하다. */}
      </div>
    );
  }
}

export default App;

class Printer extends Component {
  render() {
    console.log(this.props);
    // {data: Array(0), add: ƒ} 형태로 받는다.
    var items = this.props.data;

    return (
      <div className="App">
        <button onClick={this.props.add}>Add</button><br/>
        length : {this.props.data.length}<br/>
        invisible : {this.props.data}<br/>
        {/* 배열을 그냥 사용하면 내용이 출력되지 않는다. */}
        visible : {this.props.data.map((item)=>item)}<br/>
        {/* map 함수로 루프를 돌아 결국 같은 내용의 배열을 리턴하면 보인다. */}
        visible : {items.join('')}<br/>
        {/* 배열의 원시타입 아이템들을 출력하고자 할 때 join 함수를 쓰자. */}
      </div>
    );
  }
}
