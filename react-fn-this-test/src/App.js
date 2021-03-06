import React, {Component} from 'react';

// One of those confusing features is function context binding in JavaScript.
// In JavaScript function context is defined
// while calling the function, not while defining it!
// Such late binding is a powerful mechanism
// which allows us to re-use
// loosely coupled functions in variety of contexts.

class App extends Component {
  // 다음 코드는 constructor 코드처럼 전환되어 사용된다.
  state = { count: 0 };
  that = this;

  // constructor(...arguments) {
  //   super(...arguments);
  //
  //   this.state = { count: 0 };
  //   this.that = this;
  // }

  componentWillMount() {
    console.log("1. componentWillMount", Object.getOwnPropertyNames(this));
    // ["props", "context", "refs", "updater", "_reactInternalFiber", "_reactInternalInstance", "state"]

    this.setState({count:this.state.count+10});
    // 앞서서, constructor 내에서 this.state 를 사용하는 코드가 없으면 기본적으로
    // 새 객체에는 state 프로퍼티가 배치되지 않는다.
  }
  componentDidMount() {
    console.log("4. componentDidMount", Object.getOwnPropertyNames(this));
    // ["props", "context", "refs", "updater", "_reactInternalFiber", "_reactInternalInstance", "state"]
  }

  // ----------------------------------------------------------------------
  click1() {
    if (this) {
      console.log("3. click1", Object.getOwnPropertyNames(this));
      // ["props", "context", "refs", "updater", "_reactInternalFiber", "_reactInternalInstance", "state"]
    } else {
      console.log("5. click1", this);
      // undefined : 트랜스파일링을 거쳐 JS로 바꾸어 브라우저에게 주는 방식에서는 undefined 상태다. 이유는 추적 중!
      // CDN 방식으로 리액트를 사용하는 경우 this는 window가 된다.
      // http://jsbin.com/kacuviloxi/edit?html,js,output

      // 함수가 이벤트 리스너의 콜백함수로 사용되는 경우 this는 컴포넌트 클래스의 인스턴스 객체를 가리키지 않는다.
      // 따라서, 컴포넌트 인스턴스 객체가 직접 갖고 있는 자원 또는 부모의 자원을 사용하려면
      // 이 함수안에서 사용할 this가 컴포넌트 인스턴스 객체를 가리키도록 바인딩 처리를 선행해야 한다.
      // 이 때, 애로우 함수 문법을 사용하는 것이 가장 편리하다.
    }
  }
  // ----------------------------------------------------------------------

  render() {
    console.log("2. render", Object.getOwnPropertyNames(this));
    // ["props", "context", "refs", "updater", "_reactInternalFiber", "_reactInternalInstance", "state"]
    console.log("2. render", this.__proto__ === App.prototype);
    // true
    console.log("2. render", Object.getOwnPropertyNames(this.__proto__));
    // ["constructor", "componentWillMount", "componentDidMount", "click1", "render"]

    // click1 함수의 context는 this가 된다.
    this.click1();

    return (
      <div>
        <h3>this in function</h3>
        {/* click1 함수가 이벤트리스너 콜백함수로 사용되고 있다. */}
        <button onClick={this.click1}>click1</button>
        <div>
          count : {this.state.count}
        </div>
      </div>
    );
  }
}

export default App;
