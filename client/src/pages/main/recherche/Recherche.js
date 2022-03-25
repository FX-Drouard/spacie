import React, { Component } from 'react';
import ResultatReacherche from './ResultatReacherche'
class Recherche extends Component {
    constructor(props) {
        super(props);
        this.recherche = ""
        this.state = {
            refreche: null
        }


    }
    rechercher() {

        this.setState({ refreche: <ResultatReacherche serveur={this.props.serveur} recherche={this.recherche} setPage={this.props.setPage} setBody={this.props.setBody} /> })
    }
    getPageComponent() {
        return this.state.refreche
    }
    render() {
        return <div className="millieu">
            <div id="recherche">
                <div id="barre_recherche">
                    <textarea onChange={(event) => this.recherche = event.target.value} placeholder="Rechercher: @nick_name | #actualite" maxLength="150" />
                    <div className="buttons" onClick={() => this.rechercher()}>Rechercher</div>
                </div>
                {this.getPageComponent()}
            </div>

        </div>
    }
}

export default Recherche