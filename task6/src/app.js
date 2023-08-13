    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "project1db"

mongoClient.connect(connectionUrl, (error, res) => {
  if (error) {
    return console.log("Hmmmmm We Got A Problem Here ");
  }
  console.log("All clear");

  const db = res.db(dbname);
  ///////////////////insertion/////////////////
  db.collection('users').insertOne({
    name: "abdelrahman",
    age: 21,
    city: 'cairo'
        
  }, (error, data) => {
    if (error) {
      console.log('Unable to insert')
    }
    console.log(data.insertedId)
  })
  db.collection("users").insertOne({
    name: "ahmed",
    age: 20,
    city: "cairo"
  }, (error, data) => {
    if (error) {
      console.log('Unable to insert')
    }
    console.log(data.insertedId)
  })

  db.collection("users").insertMany([
    {
      name: "mohamed",
      age: 25,
      city: "giza",
    },
    {
      name: "ali",
      age: 21,
      city: "alex",
    },
    {
      name: "sami",
      age: 23,
      city: "cairo",
    },
    {
      name: "sameh",
      age: 25,
      city: "banha",
    },
    {
      name: "tarek",
      age: 25,
      city: "sewa",
    },
    {
      name: "mahmoud",
      age: 20,
      city: "sena",
    },
    {
      name: "ashraf",
      age: 25,
      city: "qalubiah",
    },
    {
      name: "hazem",
      age: 25,
      city: "cairo",
    },
    {
      name: "islam",
      age: 22,
      city: "alex",
    },
    {
      name: "meena",
      age: 19,
      city: "alex",
    },
  ], (error, data) => {
    if (error) {
      console.log('Unable to insert')
    }
    console.log(data.insertedCount)
  });

  db.collection("users")
    .find({ age: 25 })
    .toArray((error, data) => {
      if (error) {
        return console.log("Error in find");
      }
      console.log(data);
    });
  db.collection("users")
    .find({ age: 25 })
    .limit(3)
    .toArray((error, data) => {
      if (error) {
        return console.log("Error in find");
      }
      console.log(data);
    });
  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("64d8767e11dc3d92fb149614"),
    },
    {
      $set: { name: "amir" },
      $inc: { age: 20 },
    }
  );
    db.collection("users").updateOne(
      {
        _id: mongodb.ObjectId("64d8767e11dc3d92fb149616"),
      },
      {
        $set: { name: "osama" },
      }
    );
      db.collection("users").updateOne(
        {
          _id: mongodb.ObjectId("64d8767e11dc3d92fb149617"),
        },
        {
          $set: { name: "emad" },
        }
      );
        db.collection("users").updateOne(
          {
            _id: mongodb.ObjectId("64d8767e11dc3d92fb149618"),
          },
          {
            $set: { name: "salem" },
          }
        );
  db.collection('users').updateMany({}, {
    $inc:{age:10}
  })
  db.collection("users").deleteOne({
    _id: mongodb.ObjectId("64d8767e11dc3d92fb149614"),
  });
  db.collection('users').deleteMany({age:35})
  
})