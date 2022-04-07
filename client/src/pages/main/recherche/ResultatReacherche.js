import axios from "axios";
import React, { Component } from "react";
import MessageList from "../accueil/message/MessagesList";
import ProfilList from "../profil/ProfilList";
class ResultatReacherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null,
    };
  }

  componentWillMount() {
    if (!this.props.recherche) return;
    if (this.props.recherche[0] == "@") {
      axios
        .get("/api/user", { profil: this.props.recherche })
        .then((res) => {
          this.setState({
            container: (
              <ProfilList
                setPage={this.props.setPage}
                resultat={res}
                setBody={this.props.setBody}
              />
            ),
          });
        })
        .catch((err) => this.setState({ container: <div>{err}</div> }));

      return;
    }

    if (this.props.recherche[0] == "#") {
      axios
        .get("/api/message/hashtags", { hashtag: this.props.recherche })
        .then((res) => {
          this.setState({
            container: (
              <MessageList
                setPage={this.props.setPage}
                resultat={res}
                setBody={this.props.setBody}
              />
            ),
          });
        })
        .catch((err) => this.setState({ container: <div>{err}</div> }));

      return;
    }

    axios
      .get("/api/message", { recherche: this.props.recherche })
      .then((res) => {
        this.setState({
          container: (
            <MessageList
              setPage={this.props.setPage}
              resultat={res}
              setBody={this.props.setBody}
            />
          ),
        });
      })
      .catch((err) => this.setState({ container: <div>{err}</div> }));
  }

  render() {
    // (type, resultat) = this.props.serveur.recherche(this.props.recherche)

    //     let type = "Message";
    //     if (type === "") return <div id="resultat_recherche">Aucun resultat</div>;
    //     if (type === "Message") {
    //       let resultat = [
    //         {
    //           idMessage: 1,
    //           text: "haha",
    //           sender: {
    //             nickName: "Fristorm",
    //             photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //           },
    //           date: "22/02/2022",
    //           heure: "22:22",
    //         },
    //         {
    //           idMessage: 1,
    //           text: "hoha",
    //           sender: {
    //             nickName: "Fristorm",
    //             photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //           },
    //           date: "22/02/2022",
    //           heure: "22:22",
    //         },
    //         {
    //           idMessage: 1,
    //           text: "hahi",
    //           sender: {
    //             nickName: "Fristorm",
    //             photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //           },
    //           date: "22/02/2022",
    //           heure: "22:22",
    //         },
    //         {
    //           idMessage: 1,
    //           text: "haha",
    //           sender: {
    //             nickName: "Fristorm",
    //             photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //           },
    //           date: "22/02/2022",
    //           heure: "22:22",
    //         },
    //       ];
    //       return (
    //         <div id="resultat_recherche">
    //           <MessageList
    //             setBody={this.props.setBody}
    //             setPage={this.props.setPage}
    //             resultat={resultat}
    //           />
    //         </div>
    //       );
    //     }
    //     let resultat = [
    //       {
    //         nickName: "Fristorm",
    //         photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //       },
    //       {
    //         nickName: "Fristorm",
    //         photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //       },
    //       {
    //         nickName: "Fristorm",
    //         photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //       },
    //       {
    //         nickName: "Fristorm",
    //         photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
    //       },
    //     ];

    //     return (
    //       <ProfilList
    //         serveur={this.props.serveur}
    //         user={this.props.user}
    //         setPage={this.props.setPage}
    //         resultat={resultat}
    //         setBody={this.props.setBody}
    //       />
    //     );
    return this.state.container;
  }
}

export default ResultatReacherche;
