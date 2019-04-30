/************************************* IMPORTS *******************************************/
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const posts = require("./routes/api/posts");
/*****************************************************************************************/

const app = express();

/************************************ MIDDLEWARE *****************************************/
app.use(bodyParser.json());
/*****************************************************************************************/

/************************************** DATABASE *****************************************/
const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log("  <connected to MongoDB>"))
    .catch(err => console.log(err));
/*****************************************************************************************/

/************************************* USE ROUTES ****************************************/
app.use("/api/posts", posts);
/*****************************************************************************************/

/********************************** START SERVER *****************************************/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`  <server started on port: ${PORT}>`));
/*****************************************************************************************/
