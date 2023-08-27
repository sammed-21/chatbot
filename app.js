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
const chatBotRoutes = require("./routes/chatBotRoutes")
const conversationRoutes = require('./routes/conversationRoutes')
const endUserRoutes = require('./routes/endUserRoutes')
 


app.use("/users", userRoutes)
app.use("/chatbots", chatBotRoutes)
app.use('/conversations', conversationRoutes);
app.use('/endusers',endUserRoutes );

sequelize.sync({ force:false }) // Set to true to drop and recreate tables
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  })
app.listen(5001, () => {
  console.log("server is at 5001");
});
