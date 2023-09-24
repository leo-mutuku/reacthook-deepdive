import React from "react";

class ClassCounter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    incrementCounter = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return <div>
        <button onClick={this.incrementCounter}>Count {this.state.count}</button>
    </div>;
  }
}

export default ClassCounter;