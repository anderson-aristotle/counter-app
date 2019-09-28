import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };
  render() {
    return (
      <React.Fragment>
        <img src="" alt=""/>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero"> : count;
  }
}

export default Counter;