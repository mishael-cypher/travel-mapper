const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();

const pinRoute = require("./routes/pin")
const userRoute = require("./routes/user")

dotenv.config()

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err.message));

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)


app.listen(8800, () => {
  console.log("app is listening at ......");
});
