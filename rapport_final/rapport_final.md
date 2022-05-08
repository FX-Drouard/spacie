# Projet web | Spacie | RENDU_FINAL

## Binome

- Hamid KOLLI 28717594
- Drouard François-Xavier 3800028

### REPARTITION DU TRAVAIL

- Hamid KOLLI 28717594
  > Toutes la partie front (code js et css en entier)
  > La partie User et Message du serveur (complete)
  > Amelioration de la partie Friend et Notification
  > Requettes Postman pour tout le server
  > L'architecture (packetage) du client et du serveur
  > Gestion de sessions
  > Gestion des erreurs
  > La synchronisation entre le client et le serveur
  > L'architecture de la base de données
  > Gestion de la base de données
  > Debeugage du client, du serveur et la synchronisation entre ces deux derniers en utilisant Postman et le navigateur

- Drouard François-Xavier 3800028
  > Design de front (dessins)
  > Test unitaires Mocha (mocha-test) (non fait)    
  > La partie  Friend et Notification (moitie fait)
  > Debeug de authorisation
  > Hebergement du site et de la base de données sur un serveur distant avec la configuration des ports
  

### LES PROBLEMES

- La synchronisation entre le client et le serveur n'est pas bonne

- La gestion des sessions

- Contrainte de temps 

- Probleme concernant l'organisation du binome

### CE QUI RESTE A FAIRE

- Debeuger la synchronisation entre le client et le serveur, sur postman les requettes de message et user marche, les autres on ne les a pas bien tester (ami et message)
- commenter le code


### LES FONCTIONNALITES AJOUTE

> Les notifications
- Un utilisateur reçoit une notification lorsque quelqu'un d'autre aime son message, reposte son message, commente son message, l'ajoute comme ami, et il peut accepter l'amitie qu'a travers une notification

> Les commetaires
- Les utilisateurs peuvent commenter un message, ce commetaire est considéré comme un message, donc il sera affiche meme dans son profil

> Star
- Un star est un like, un utilisateur peut star un message

> Repost
- Un utilisateur peut reposter un message, ce message sera affiche dans son profil comme si c'était un message qu'il a posté

### CHOIX DE MODELISATIONS

- On a utilise les modélisations suivantes :

 > MongoDB au lieu de nedDB parceaue notre base de données est sur un serveur distant et nedDB est fait pour reste en local. 

 > On a utilise le jsonwebtoken pour gerer les sessions car c'est plus simple de verifier l'utilisateur connecte et la generation du token.

 > On a utilise le module crypto pour cacher les mot de passe des utilisateurs dans la base de données.
 