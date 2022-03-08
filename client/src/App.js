import React, { Component } from 'react';
import Main from './Main.js'
// import Serveur from '../../../serveur/Serveur.js';

class App extends Component {
    constructor(props) {
        super(props)
        this.setToken = this.setToken.bind(this)
        this.setBody = this.setBody.bind(this)
        // this.serveur = new Serveur()
        this.serveur = null
        this.state = {
            token: "",
            page: "0",
        }
        this.pages = <Main token={this.state.token} serveur={this.serveur} setBody={this.setBody} setToken={this.setToken} />

    }

    setBody(cl) {
        this.pages = cl
        this.setState({ page: Math.random() })
    }
    getBody() {
        return this.pages
    }

    setToken(tkn) {
        this.setState({ token: tkn })
    }

    render() {

        return this.getBody()

    }
}

export default App