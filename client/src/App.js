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
            page: "0"
        }
        this.pages = []
        this.setBody("main", <Main token={this.state.token} serveur={this.serveur} setBody={this.setBody} setToken={this.setToken} />)
    }

    setBody(cssType, cl) {
        console.log(this.state.css)
        this.pages.push(cl)
        this.setState({ page: this.pages.indexOf(cl), css: cssType })
    }
    getBody() {
        return this.pages[this.state.page]
    }

    setToken(tkn) {
        this.setState({ token: tkn })
    }

    render() {

        if (this.state.css == "main")
            import('./assets/css/index.css')
        else
            // import('./assets/css/login.css')


            return <div>
                {this.getBody()}
            </div>
    }
}

export default App