
let logins = ["Palifen", "Stom", "Amayas", "Amine", "Rayene", "Dyhia"]

let creationDate = ["24/02/2022", "16/12/2022", "29/12/2022", "16/02/2022", "16/03/2022"]
let dateNaissance = ["08/04/2001", "25/02/2000", "29/12/2002", "16/02/2000", "16/03/1999"]


function getProfile(login) {
    return {
        login: login,
        mail: login + "@spacie.fr",
        nickName: login,
        creationDate: creationDate[Math.floor(Math.random() * creationDate.length)],
        photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
        date: dateNaissance[Math.floor(Math.random() * dateNaissance.length)],
        biographie: "etudiant a la sorbonne universite",
        followers: Math.random() * 1000,
        followings: Math.random() * 1000,
        messages: Math.random() * 1000,
        stars: Math.random() * 1000
    }
}

function getUser() {


    let login = logins[Math.floor(Math.random() * logins.length)]
    return {
        login: login,
        mail: login + "@spacie.fr",
        nickName: login,
        creationDate: creationDate[Math.floor(Math.random() * creationDate.length)],
        photoProfil: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
        date: dateNaissance[Math.floor(Math.random() * dateNaissance.length)],
        biographie: "etudiant a la sorbonne universite",
        followers: Math.random() * 1000,
        followings: Math.random() * 1000,
        messages: Math.random() * 1000,
        stars: Math.random() * 1000
    }
}

function getUsers() {
    let users = [];
    for (var i = 0; i < 20; i++) {
        users.push(getUser())
    }
    return users
}


let messageText = ["je suis la", "il fait beau", "l'argent, drahem rebek", "etudiant a la sorbonne universite", "If you want to help contribute to Ubuntu, then you’ve come to the right place. Keep reading to learn howYou have just taken your first step toward getting involved. Before you get started, we ask that you please observe the Ubuntu Code of Conduct. It’s not very long and it will help you get started.Once that’s done, check out our community page.Teams The Teams page contains a listing of the various Community Teams, their responsibilities, links to their Wiki Home Pages and leaders, communication tools, and a quick reference to let you know whether and when they hold meetings.Most Teams’ Wiki Home Pages provide information about who they are, what they do, when their meetings are, and how to contact them. Using these pages, teammates are able to communicate and coordinate projects.LoCoTeamsFor participating on the Country area team contributing to a Local Development of Localization and Internationalization and promoting use of Ubuntu.Governance and MembershipLike most communities, we have our rules and governing body.Anyone can join and participate in most, if not all, of our Teams and Projects. But if you"]
let idMessage = 0


function getMessages() {
    let messages = [];
    for (var i = 0; i < 20; i++) {
        messages.push({
            idMessage: idMessage++,
            text: messageText[Math.floor(Math.random() * messageText.length)],
            image: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
            sender: getUser(),
            date: creationDate[Math.floor(Math.random() * creationDate.length)],
            heure: "22:22",
            stars: Math.floor(Math.random() * 1000),
            commentaires: Math.floor(Math.random() * 1000),
            shars: Math.floor(Math.random() * 1000)
        })
    }
    return messages
}

function getMessagesProfil(login) {
    let messages = [];
    for (var i = 0; i < 20; i++) {
        messages.push(
            {
                idMessage: idMessage++,
                text: messageText[Math.floor(Math.random() * messageText.length)],
                image: "https://media.spacie.fr/Profil/Fristorm/pdp.png",
                sender: getProfile(login),
                date: "22/02/2022",
                heure: "22:22"
            }
        )
    }
    return messages
}

exports.getMessages = getMessages
exports.getMessagesProfil = getMessagesProfil
exports.getUsers = getUsers
exports.getUser = getUser
exports.getProfile = getProfile