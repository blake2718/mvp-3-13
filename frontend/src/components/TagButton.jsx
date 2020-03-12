import React, { Component } from 'react';
import './tag_button.css'

export default class TagButton extends Component {
  render(){
    return (
      <div 
        className="tag-button" 
        style={{backgroundColor: this.props.color}}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </div>
    )
  }
}