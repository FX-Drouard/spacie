import React from "react";
import UserInfo from "./UserInfo";
const {getDate,getHours,getMinutes} = require("./date.js")
class UserInfoDate extends React.Component {
  componentWillReceiveProps(props) {
    this.props = props;
    
  }
  render() {
    if  (!this.props.user) {
      return <div></div>
    }
    let date = getDate(this.props.date)
    let heure = getHours();
    return (
      <div className="message_user_info">
        <UserInfo user={this.props.user} setPage={this.props.setPage} />
        <p className="message_date">
          {date} {heure}
        </p>
      </div>
    );
  }
}

export default UserInfoDate;
