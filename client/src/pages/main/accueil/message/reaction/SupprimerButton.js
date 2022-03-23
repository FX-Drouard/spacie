import React, { Component } from 'react';

class SupprimerButton extends Component {


    supprimer() {
        //TODO
    }

    render() {
        return (
            <div className="message_button fa-solid fa-trash-can fa-xl" onClick={() => this.supprimer()}>
            </div>
        );
    }
}

export default SupprimerButton