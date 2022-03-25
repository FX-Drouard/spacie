import React, { Component } from 'react';
import Profil from './Profil.js';
const data = require('../general/Data.js')

class ProfilButton extends Component {
    constructor(props) {
        super(props)
    }

    gotoProfil() {
        // TODO
        this.props.setPage(<Profil setBody={this.props.setBody} serveur={this.props.serveur} setPage={this.props.setPage} user={data.getProfile("Fristorm")} />)
    }

    render() {

        return <div id="lien_profil">

            <span onClick={() => this.gotoProfil()}><img src="https://media.spacie.fr/Profil/Fristorm/pdp.png" alt="photo de profil" /></span>

        </div>

    }

}


export default ProfilButton