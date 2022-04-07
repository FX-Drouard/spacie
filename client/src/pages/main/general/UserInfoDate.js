import React from "react";
import UserInfo from "./UserInfo";

class UserInfoDate extends React.Component {
  componentWillReceiveProps(props) {
    this.props = props;
  }
  render() {
    let timestamp = new Date(this.props.date);
    let date =
      +timestamp.getFullYear() +
      "/" +
      (timestamp.getMonth() + 1) +
      "/" +
      timestamp.getDate();

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
