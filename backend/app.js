const express = require("express");
const dotenv = require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const usersRouter = require("./routes/usersRoutes");
const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
