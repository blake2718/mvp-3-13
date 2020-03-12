import React, {Component} from 'react';
import TagButton from './TagButton'
import MessageRow from './MessageRow'
import './receive.css'
import './common.css'

export default class Receive extends Component {

  constructor(props){
    super(props);
    this.state={
      messages: [
      ]
    }

    this.handleGet = this.handleGet.bind(this);
  }

  handleGet = async (tag) => {
    let url = "http://" + process.env.REACT_APP_MINIKUBE_IP;
    let port = ""
    if (tag === "red"){
      port = "30501";
    } else if (tag === "blue"){
      port = "30502";
    } else {
      return;
    }
    url = url + ":" + port + "/cnsm"
    await fetch(url).then((response)=>{
      return response.text();
    }).then((data)=>{
      let newMessages = this.state.messages;
      newMessages.push({text: data, tag: tag});
      this.setState({messages: newMessages});
    });
  }

  render(){
    return (
      <div className="sr-section">

        <div className="header">
          <p className="header-text">
            Receive
          </p>
        </div>

        <div className="content-area">

          <div className="tag-area">
            {this.props.tagList.map(item=>{
              return (
                <TagButton
                  onClick={this.handleGet.bind(this, item.tag)}
                  color={item.color}
                  label={item.tag}
                />
              )
            })}
          </div>

          <div className="received-area">
            {this.state.messages.map(item=>{
              return (
                <MessageRow
                  tag={item.tag}
                  text={item.text}
                />
              )
            })}
          </div>

        </div>
      </div>
      )
    }
  }