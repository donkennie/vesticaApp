const express= require("express");
const userRoute = require("./routes/userRoute")
const noteRoute = require("./routes/noteRoute")

const app = express();

app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);

module.exports = app;