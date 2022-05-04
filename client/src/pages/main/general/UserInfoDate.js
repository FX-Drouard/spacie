import React from "react";
import UserInfo from "./UserInfo";
const dateGater = require("./date.js")
class UserInfoDate extends React.Component {
  componentWillReceiveProps(props) {
    this.props = props;
  }
  render() {
    
    let date = dateGater.getDate(props.date)

    let heure = timestamp.getHours() + ":" + timestamp.getMinutes();
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
