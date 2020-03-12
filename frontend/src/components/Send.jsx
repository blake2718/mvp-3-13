import React, { Component } from 'react';
import TagButton from './TagButton'
import Selection from './Selection'
// import MessageSend from './MessageSend'
import './send.css'
import './common.css'
import sendIcon from '../sendIcon.png'

export default class Send extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTag: "",
      inputValue: "",
      color: '#2b2b2b'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(tag, color){
    this.setState({selectedTag: tag, color})
  }

  handleChange(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(){
    let url = "http://" + process.env.REACT_APP_MINIKUBE_IP + ":30500/send";
    if (this.state.selectedTag !== ""){
      url = url + "?tag=" + this.state.selectedTag;
      if (this.state.selectedTag !== ""){
        url = url + "&msg=" + this.state.inputValue;
      }
    } else if (this.state.selectedTag !== ""){
      url = url + "?msg=" + this.state.inputValue;
    }
    fetch(url);
    this.setState({
      inputValue: "",
      selectedTag: "",
      color: '#1a1a1a'
    })
  }

  render(){
    console.log(process.env.REACT_APP_MINIKUBE_IP);
    return (
      <div className="sr-section">
        <div className="header">
          <p className="header-text">
            Send
          </p>
        </div>
        <div className="send-content-area">
          <div className="tag-section">
            {this.props.tagList.map(item=>{
              return (
                <TagButton
                  onClick={this.handleClick.bind(this, item.tag, item.color)}
                  color={item.color}
                  label={item.tag}
                />
              )
            })}
          </div>

          <div className="tag-selection-area">
            <Selection  label="Tag: " text={this.state.selectedTag}></Selection>
          </div>

          <div className="message-area">
            <form 
              className="send-container"
              onSubmit={this.handleSubmit}
            >

              <input 
                type="text"
                className="message-input" 
                align="top"
                value={this.state.inputValue}
                onChange={this.handleChange}
                placeholder='message'
              />

              <div 
                className="send-icon-container"
                style={{'background-color': this.state.color}}
                type="submit"
                onClick={this.handleSubmit}
              >
                <img 
                  src={sendIcon}
                  alt="send icon"
                  className="send-icon"
                />
              </div>

            </form>
          </div>

        </div>
      </div>
      )
    }
  }