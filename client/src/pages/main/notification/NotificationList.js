import React, { Component } from "react";
import Notification from "./Notification";

class NotificationList extends Component {
  render() {
    return (
      <section>
        {this.props.resultat.map((e, index) => (
          <Notification
            setBody={this.props.setBody}
            serveur={this.props.serveur}
            setPage={this.props.setPage}
            notification={e}
          />
        ))}
      </section>
    );
  }
}

export default NotificationList;
