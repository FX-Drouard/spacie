import Message from '../../Message';
import React, { Component } from 'react'

class Commentaires extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section id="messages">
                {this.props.resultat.map((e, key) => <Message comment={true} setBody={this.props.setBody} token={this.props.token} serveur={this.props.serveur} setPage={this.setPage} message={e} />)}
            </section>)
    }


}

export default Commentaires