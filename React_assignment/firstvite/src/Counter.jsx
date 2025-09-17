import { Component } from "react";

class Counter extends Component {

  constructor() {
    super();
    this.state = { count: 0 };
     }

  increement = () => {
      this.setState({ count: this.state.count + 1 });
     };

       componentDidMount() {
    console.log("component mounted ");
  }

    componentWillUnmount() {
    console.log("component will unmount");
      }
      
  render() {
    return (
       <div>
         <h2>Count: {this.state.count}</h2>
        <button onClick={this.increement}>Increement</button>
       </div>
    );  
  }
}

export default Counter;
