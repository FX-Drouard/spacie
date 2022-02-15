import react, { Component } from 'react';
import Login from './Login.js';
import Logout from './Logout.js'

class NavigationPannel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <nav>
            {!this.props.isConnected ? <Login value={this.props.getConnected} />
                : <Logout value={this.props.setLogout} />}
        </nav>
    }
}
export default NavigationPannel