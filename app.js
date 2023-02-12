const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connectDB");
const notFound = require("./middlewares/notFound");
const dotenv = require("dotenv");

//Enable environmental variables
dotenv.config();

//Application Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Router
app.use("/api/v1/tasks", tasks);

//Middleware for router that does not exist
app.use(notFound);

//Get PORT number from environmental variables
const port = process.env.PORT || 5000;

//Start express application
async function start() {
  try {
    //Connect to MongoDB
    await connectDB(process.env.MONGO_URL);

    //Listen to request on PORT
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
