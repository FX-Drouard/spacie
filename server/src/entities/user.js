const DataStore = require("nedb");

const db = new DataStore();
db.user = new DataStore({ filename: "mongodb://spacie.fr:27017/Spacie/users" });
db.message = new DataStore();
db.user.loadDatabase();

// db.user.insert(
//   { _id: 1, pseudo: "admin", password: "admin", role: "admin" },
//   (err, doc) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(doc);
//     }
//   }
// );

db.user.find({ _id: 1 }, (err, docs) => {
  if (err) {
    console.log(err);
  } else {
    console.log(docs);
  }
});
