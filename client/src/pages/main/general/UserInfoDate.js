import React from 'react';
import UserInfo from './UserInfo';

class UserInfoDate extends React.Component {

    componentWillReceiveProps(props) {
        this.props = props
    }
    render() {
        return (
            <div className="message_user_info">
                <UserInfo serveur={this.props.serveur} user={this.props.user} setPage={this.props.setPage} />
                <p className="message_date"> {this.props.date} {this.props.heure}</p>
            </div>
        );
    }
}



export default UserInfoDate;