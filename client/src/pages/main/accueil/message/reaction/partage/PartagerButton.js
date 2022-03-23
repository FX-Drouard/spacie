import React, { Component } from 'react';
import LoginPage from '../../../../../login/LoginPage';

class PartagerButton extends Component {
    constructor(props) {
        super(props);
    }

    partgerPublication() {
        if (this.token === "") {
            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} />)
            return
        }
        //TODO
    }

    render() {
        return <div className="message_button fa-solid fa-rocket fa-xl" onClick={event => { this.partgerPublication() }}></div>

    }
}

export default PartagerButton;