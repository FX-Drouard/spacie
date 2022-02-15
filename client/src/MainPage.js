import React from 'react';
import NavigationPannel from './NavigationPannel.js'
class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { connexion: false }
        this.getConnected = this.getConnected.bind(this)
        this.setLogout = this.setLogout.bind(this)
    }

    getConnected = () => {
        if (this.state.connexion == true)
            return
        this.setState(state => {
            state.connexion = true;
            return state
        })
    }
    setLogout = () => {
        if (this.state.connexion == false)
            return
        this.setState(state => {
            state.connexion = false;
            return state
        })
    }

    render() {
        // return (
        //     <div>
        //         <header>
        //             <div id="header"><div id="logo" >
        //                 <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" />
        //             </div >
        //                 <div id="title">
        //                     <p>Spacie</p>
        //                 </div>
        //             </div >
        //         </header>
        //         <section>
        //             <div id="block_con">
        //                 <form method="post" action="https://spacie.fr/">
        //                     <h2 id="titre_con">Log in</h2>
        //                     <div className="text">
        //                         <input type="text" name="Login" placeholder="Login" maxlength="30" />
        //                     </div>
        //                     <div className="text">
        //                         <input type="password" name="Mot de Passe" placeholder="Votre mot de passe" maxlength="30" />
        //                     </div>
        //                     <div className="button">
        //                         <input type="submit" name="Connexion" value="Connexion" />

        //                     </div>
        //                     <div id="inscription">
        //                         <a href="enregistrement.html">inscription</a>
        //                     </div>
        //                 </form>
        //             </div >
        //         </section >
        //         <footer>
        //             <p>Copyright © 2022 Spacie - Tous droits réservés.</p>
        //         </footer>
        //     </div>
        // )

        return (<div>
            <NavigationPannel login={this.getConnected} logout={this.setLogout} isConnected={this.state.connexion} />
        </div>)

    }

}

export default MainPage