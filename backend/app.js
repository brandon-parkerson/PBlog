const express = require("express");
const dotenv = require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// Routers
const usersRouter = require("./routes/usersRoutes");
const postsRouter = require("./routes/postsRoutes");
const indexRouter = require("./routes/indexRoutes");
const loginRouter = require("./routes/loginRoutes");

const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json())
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);
app.use("/api/register", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/login", loginRouter);



app.listen(3000, () => {
  console.log("Server running on port 3000...");
});


