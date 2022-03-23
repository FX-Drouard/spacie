import React, { Component } from 'react';
import LoginPage from '../../../../login/LoginPage';

class Star extends Component {
    constructor(props) {
        super(props);

        this.isLiked = false;
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]

    }

    aimerPublication() {
        if (this.token === "") {
            this.props.setBody(<LoginPage setBody={this.props.setBody} serveur={this.props.serveur} />)
            return
        }
        //TODO
    }

    render() {
        return <div className="message_button fa-solid fa-star fa-xl" onClick={event => { this.aimerPublication() }} style={{ color: this.isLiked ? "green" : "" }} ></div>

    }
}

export default Star
