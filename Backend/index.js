const express = require('express');
const cors= require('cors')
const mongoose = require('mongoose')
const verifyToken = require("./utils/validate-token")

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;


//routes 
const authRoutes = require("./routes/user");
const bookRoute = require("./routes/book")

const feedRoute = require("./routes/feed")

//middlewear 
app.use(cors());
app.use(express.json())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//routes middlewear 
const uri = process.env.ATLAS_URI ||process.env.uri_mongo



mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
// Feed route
app.post("/addBook", verifyToken, feedRoute);
app.post("/postFeed", verifyToken, feedRoute);
app.post("/postComment/:id", verifyToken, feedRoute);
app.get("/getAllTrades", verifyToken, feedRoute);
app.get("/postFeed",  feedRoute)

// auth and user  route
app.get("/auth/me", verifyToken, authRoutes);
app.patch("/auth/me/update", verifyToken, authRoutes);
app.get("/user/:id", authRoutes);
app.post("/register", authRoutes);
app.post("/login", authRoutes);
app.post("/user/:user_id/follow",verifyToken,authRoutes)
app.post("/user/:user_id/unfollow",verifyToken,authRoutes)

// Book api route
app.post("/getBooks", bookRoute);


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})