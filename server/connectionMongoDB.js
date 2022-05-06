const { MongoClient } = require("mongodb");

async function connection() {
  const url = "mongodb://data.spacie.fr:26017";
  const client = new MongoClient(url);
  console.log("Connexion à MongoDB...");
  await client.connect();
  console.log("Connexion à MongoDB réussie !");
  return client.db("Spacie");
}
let dataBase = null
function  getConnection() {
  return new Promise((resolve, reject) => {
  if (dataBase === null) {
     connection().then(db => { dataBase = db; resolve(db)}).catch(err => { reject(err)})
  }
  else {
    resolve(dataBase)
  }
});
}
function getCollection(collection,db) {
  return new Promise((resolve, reject) => {
    
    db.collection(collection).then(res => resolve(res)).catch(err => { reject(err)})
  });
}
module.exports = {getConnection, getCollection}