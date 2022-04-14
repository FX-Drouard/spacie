const { MongoClient } = require("mongodb");
const crypto = require("crypto");
const { use } = require("chai");

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
    // user.deleteOne({ _id: "hamid" });
    // user.insertOne({ _id: "hamid", email: "stom@spacie.fr", age: 21 });
    user
      .findOne({ _id: "hamid" }, { email: 1, age: 0 })
      .then((res) => console.log(res));
  })
  .catch((err) => {
    console.log(err);
  });
