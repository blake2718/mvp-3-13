import React, { Component } from 'react';
import './selection.css'

export default class Selection extends Component {
  render(){
    return (
      <div className="container">

        <div className="label">
          <p>
            {this.props.label}
          </p>
        </div>

        <div className="selection-area">
          <p>
            {this.props.text}
          </p>
        </div>

      </div>
    )
  }
}