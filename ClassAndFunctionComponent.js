// class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}

export default Welcome;


// function component
function Welcome() {
  return <h1>Hello</h1>;
}

export default Welcome;


// | Feature            | Class Component  | Functional Component |
// | ------------------ | ---------------- | -------------------- |
// | Syntax             | Complex          | Simple               |
// | Uses class keyword | Yes              |  No                  |
// | Uses render()      | Yes              |  No                  |
// | State handling     | `this.state`     | Hooks                |
// | Lifecycle methods  | Yes              | Hooks                |
// | Performance        | Slightly heavier | Faster/light         |
// | Modern React use   | Rare             | Preferred            |
