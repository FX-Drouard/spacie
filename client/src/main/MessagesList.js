import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="liste_commentaire">

                <article class="commentaire">
                    <div class="message_user_info">
                        <a href="profil/index.html"><img src="https://media.spacie.fr/Profil/Stom@/pdp.png" alt="pdp"
                            width="40" height="40" /></a>
                        <a href="profil/index.html">
                            <p>Stom@</p>
                        </a>
                        <p class="message_date">Le 02/02/2022 à 22:23</p>
                    </div>
                    <p class="message_textuel">« Texte » est issu du mot latin « textum », dérivé du verbe « texere »
                        qui signifie « tisser ». Le mot s'applique à l'entrelacement des fibres utilisées dans le
                        tissage, voir par exemple Ovide : « Quo super iniecit textum rude sedula Baucis = (un siège) sur
                        lequel Baucis empressée avait jeté un tissu grossier »2 ou au tressage (exemple chez Martial «
                        Vimineum textum = panier d'osier tressé »). Le verbe a aussi le sens large de construire comme
                        dans « basilicam texere = construire une basilique » chez Cicéron3.

                        Le sens figuré d'éléments de langage organisés et enchaînés apparaît avant l'Empire romain : il
                        désigne un agencement particulier du discours. Exemple : « epistolas texere = composer des
                        épîtres » - Cicéron (Ier siècle av. J.-C.)4 ou plus nettement chez Quintilien (Ier siècle apr.
                        J.-C.) : « verba in textu jungantur = l'agencement des mots dans la phrase »5.

                        Les formes anciennes du Moyen Âge désignent au XIIe siècle le volume qui contient le texte sacré
                        des Évangiles, puis au XIIIe siècle, le texte original d'un livre saint ou des propos de
                        quelqu'un. Au XVIIe siècle le mot s’applique au passage d'un ouvrage pris comme référence et au
                        début du XIXe siècle le mot texte a son sens général d'« écrit »6. </p>
                    <div class="message_button">
                        <input type="button" id="aimer" name="j'aimer" value="J'aime" />
                        <input type="button" id="commentaire" name="Commentaire" value="Commentaire" />
                        <input type="submit" id="add_new_message" name="Partager" value="Partager" />
                    </div>
                </article>

            </section>)
    }
}

export default Nav