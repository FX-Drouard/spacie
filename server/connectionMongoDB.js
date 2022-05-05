const { MongoClient } = require("mongodb");
async function connection() {
  const url = "mongodb://data.spacie.fr:26017";
  const client = new MongoClient(url);
  console.log("Connexion à MongoDB...");
  await client.connect();
  console.log("Connexion à MongoDB réussie !");
  return client.db("Spacie");
}


module.exports = {connection}