import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import {render} from "react-dom";

class App extends Component {

    state = {number : 5}

  render(){
    return (
        <div className="App">
          <h1>ROOT</h1>
          <AddNumberRoot onClick = { (size: number) => {
              this.setState({number:this.state.number + size})
          }
          }/>
          <DisplayNumberRoot number = {this.state.number}></DisplayNumberRoot>
        </div>
    );
  }

}




export default App;
