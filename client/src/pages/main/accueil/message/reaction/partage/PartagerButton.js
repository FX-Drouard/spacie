import React, { Component } from 'react';

class PartagerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="message_button fa-solid fa-rocket fa-xl" onClick={event => { this.partgerPublication(event) }}></div>

    }
}

export default PartagerButton;