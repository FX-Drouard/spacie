import React, { Component } from 'react';

class PartagerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="message_button" onClick={event => { this.partgerPublication(event) }}><img src="https://media.spacie.fr/default/pages/svg/share.svg" alt="Partager" /></div>

    }
}

export default PartagerButton;