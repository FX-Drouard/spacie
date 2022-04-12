const { MongoClient } = require("mongodb");

async function connection() {
  const url = "mongodb://spacie.fr/";
  const client = new MongoClient(url);
  console.log("Connexion à MongoDB...");
  await client.connect();
  console.log("Connexion à MongoDB réussie !");
  return client.db("Spacie");
}

connection()
  .then((db) => {
    console.log(2);
    const user = db.collection("Users");
    user.insertOne({ _id: "spacie", motDePasse: "Spacie2022", email: "" });
  })
  .catch((err) => {
    console.log(err);
  });
