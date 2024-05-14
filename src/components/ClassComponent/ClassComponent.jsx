import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    console.log('props',props);
    super(props);
    this.state = {
      count: 0,
      name: 'test'
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log(111);
    return (
      <div>
        <h1>Count: {this.state.count} {this.state.name} </h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
