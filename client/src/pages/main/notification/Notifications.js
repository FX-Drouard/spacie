import React, { Component } from 'react';
import Notification from './Notification';

class Notifications extends Component {
    render() {
        return (
            <section >
                {this.props.resultat.map((e, index) => <Notification setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.props.setPage} message={e} />)}
            </section>);
    }
}

export default Notifications;