import { Component } from "react";
type PropsType = {name?: string, className?: string}
type StatesType = {count: number}
  class ClassComponent extends Component<PropsType, StatesType> {
    state = {
      count: 0,
    };
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <h1>Hello, {this.props.name}!</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }
  
  export default ClassComponent;