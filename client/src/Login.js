import react, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
                <input type="text" placeholder="login" />
                <input type="password" placeholder="password" />
                <button >login</button>
            </form>
        </div>
    }
}

export default Login