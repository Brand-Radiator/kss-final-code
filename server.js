const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const connectdb = require("./config");

const app = express();
const port = 5000;
connectdb();
app.use(bodyParser.json());
app.use(cors());


const mongoUrl = "mongodb+srv://brandRadiator:brand123@kssdatabase.9zqytut.mongodb.net/?retryWrites=true&w=majority"
const dbName = "KSS-CANDIDATE-DATABASE";
const collectionName = "selectedCandidate";




// "mongodb+srv://brandRadiator:<password>@kssdatabase.9zqytut.mongodb.net/?retryWrites=true&w=majority"

// username = brandRadiator
// password = brand123


// Save data to MongoDB
app.post("/api/saveData", async (req, res) => {
  // console.log("req");
  try {
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const jsonData = req.body;
    const result = await collection.insertMany(jsonData);
    client.close();

    res.status(200).json({ message: "Data saved to MongoDB successfully" });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving data to MongoDB" });
  }
});

// Fetch all data from MongoDB
app.get("/api/fetchData", async (req, res) => {
  try {
    // console.log("fetch");
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray(); // { adharNo: 975003524557 }
    client.close();
    // console.log(result, "dataaaaaa");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from MongoDB" });
  }
});

// fetch details of a user
app.get("/api/fetchDetails/:id", async (req, res) => {
  try {
    // console.log("fetch details");
    const id = req.params.id;
    console.log(id + "it is ");
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    // console.log(typeof (id));
    let idn = Number(id);
    const result = await collection.find({ adharNo: idn }).toArray(); // { adharNo: 975003524557 }
    client.close();
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from MongoDB" });
  }
});

// patch api  to update data image and attendance
app.patch("/api/upadateImage", async (req, res) => {
  let LiveImageURL = req.body.LiveImageURL;
  let adharNo = req.body.adharNo;
  console.log(LiveImageURL, "imageeeeeee")
  console.log(adharNo, "adharrrrrrrrrr");

  const client = await MongoClient.connect(mongoUrl);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  // console.log(typeof (id));
  let idn = Number(adharNo);
  const result = await collection.updateOne(
    { adharNo: idn },
    { $set: { LiveImageURL: LiveImageURL, attendance: true } },
    {
      new: true,
    }
  );
  // { adharNo: 975003524557 }
  client.close();
});

app.get("/", (req, res) => {
  res.send("app is running ");
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
