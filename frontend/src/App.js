import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Send from './components/Send'
import Receive from './components/Receive'


export default class App extends React.Component {

  constructor(){
    super();
    this.tagList = [
      {tag: "blue", color: "#5a9be0"},
      {tag: "red", color: "#e05a5a"},
      // {tag: "green", color: "green"}
    ];
  }

  render(){
    return (
      <div className="App">
        <Send tagList={this.tagList}></Send>
        <div className="separator"></div>
        <Receive tagList={this.tagList}></Receive>
      </div>
    );
  }
  
}
