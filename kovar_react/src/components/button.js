import { Component } from "react";

class Button extends Component{
    state = {
        age: 1,
    }
    HandleAgeChange = () => {
        this.setState({ age: this.state.age + 1 })
    }
    render(){
   return <div><button onClick={this.HandleAgeChange}>
        vek zmena
   </button>
        <h1 className="text-cyan-300 hover:text-green-400">
            {this.state.age}
        </h1>
   </div>
}}
export default Button;