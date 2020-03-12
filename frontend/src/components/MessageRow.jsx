import React, { Component } from 'react';
import './messagerow.css'

export default class MessageRow extends Component {
  render() {
    return (
      <div className="msg-row-container">

        <div className="tag">
          {this.props.tag}
        </div>

        <div className="text">
          {this.props.text}
        </div>
  
      </div>
    )
  }
}