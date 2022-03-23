import React, { Component } from 'react';
import ResultatReacherche from './ResultatReacherche'
class Recherche extends Component {
    constructor(props) {
        super(props);
        this.recherche = ""
        this.pageComponent = <div></div>

    }
    rechercher() {
        this.pageComponent = <ResultatReacherche serveur={this.props.serveur} recherche={this.recherche} setPage={this.props.setPage} setBody={this.props.setBody} />
        this.setState({ refreche: "" })
    }
    getPageComponent() {
        return this.pageComponent
    }
    render() {
        return <div className="millieu">
            <div id="recherche">
                <div id="barre_recherche">
                    <textarea ref={this.recherche} placeholder="Rechercher: @nick_name | #actualite" maxLength="150" />
                    <div className="buttons" onClick={() => this.rechercher()}>Rechercher</div>
                </div>
                {this.getPageComponent()}
            </div>

        </div>
    }
}

export default Recherche