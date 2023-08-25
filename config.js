const mongoose = require("mongoose");


const URI =
  "mongodb+srv://brandRadiator:brand123@kssdatabase.9zqytut.mongodb.net/?retryWrites=true&w=majority";




const connectDB = async () => {
  // console.log("Function in database")
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // findOneAndUpdate: true, /* this should be modified */
      // useCreateIndex: true
    });

    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
