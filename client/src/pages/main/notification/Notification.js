import UserInfoDate from "../general/UserInfoDate";
import React, { Component } from 'react'
import axios from "axios";
import { getLoginFromToken } from "../general/token";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : null,
    }
  }
  
  componentWillMount() {
    axios.get("/api/user/" + this.props.notification.user)
    .then((res) => {
      this.setState({user : res.data})
    }).catch((err) => {
      alert(err);
    })
  }

  componentWillReceiveProps(props) {
    this.componentWillMount(props)
  }

  render() {
    return (
        <div className="notification">
          <UserInfoDate
            user={this.state.user}
            setPage={this.props.setPage}
            date={this.props.notification.date}
          />
          <div className="message_textuel">{this.props.notification.text}</div>
          {this.props.notification.demande && (
            <div className="notification_button">
              <div className="buttons" onClick={()=>{
                axios.delete("/api/friend/demande/" + this.props.notification.demande,
                {login : getLoginFromToken()},{
                  headers: {
                    authorization: "Bearer " + this.token,
                  },
                }
                ).catch((err) => alert(err));
              }}>
                Annuler
              </div>
              <div className="buttons" onClick={()=>{
                axios.post("/api/friend/accepte/" + this.props.notification.demande,
                {login : getLoginFromToken()},{
                  headers: {
                    authorization: "Bearer " + this.token,
                  },
                }
                ).catch((err) => alert(err));
              }}>
                Accepter
              </div>
            </div>
          )}
        </div>
      );
    
  }
}


