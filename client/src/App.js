import React, { Component } from 'react';
import Main from './pages/main/Main.js';
import axios from 'axios';
// import Serveur from '../../../serveur/Serveur.js';

class App extends Component {
    constructor(props) {
        super(props)
        this.setToken = this.setToken.bind(this)
        this.setBody = this.setBody.bind(this)
        // this.serveur = new Serveur()
        this.serveur = axios.create({ baseURL: "", timeout: 1000, header: { customHeader: "" } })
        this.state = {
            token: "",
            page: null,
        }


    }

    componentWillMount() {
        this.setBody(<Main token={this.state.token} serveur={this.serveur} setBody={this.setBody} setToken={this.setToken} />)
    }
    setBody(cl) {
        this.pages = cl
        this.setState({ page: cl })
    }
    getBody() {
        return this.state.page
    }

    setToken(tkn) {
        this.setState({ token: tkn })
    }

    render() {
        return this.getBody()
    }
}

export default App