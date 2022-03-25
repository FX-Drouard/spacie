import React, { Component } from 'react';
import ProfilList from './profil/ProfilList';
const data = require('./general/Data.js')


class Suggestion extends Component {
    constructor(props) {
        super(props);
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]
    }

    render() {

        let resultat = data.getUsers().slice(0, 5)


        return <div id="suggestion_profil">
            {this.token ?
                <ProfilList serveur={this.props.serveur} setPage={this.props.setPage} setBody={this.props.setBody} resultat={resultat} />
                : ""
            }
        </div>
    }
}

export default Suggestion