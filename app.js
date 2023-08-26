const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./database/connection");
const cors = require('cors');
// const userRouter = require('./routes/userRouter');
app.use(express.json());


app.use(cors());

app.use(bodyParser.json());



const userRoutes = require("./routes/userRoutes");
console.log('hit')


app.use("/users", userRoutes)

sequelize.sync().then(() => console.log("db is ready"));
app.listen(5001, () => {
  console.log("server is at 5001");
});
