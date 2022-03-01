import MessageList from '../../MessagesList';

class Commentaires extends MessageList {
    constructor(props) {
        super(props);
    }

    getMessages() {
        return this.props.serveur.getCommentsOfMessage(this.props.message);
    }
    render() {
        return super.render()
    }

}

export default Commentaires