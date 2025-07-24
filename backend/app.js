const express = require("express");
const dotenv = require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const db = require("./db/queries");
const verifyToken = require("./middleware/verifyToken");
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
app.use("/api/posts", verifyToken, postsRouter);
app.use("/api/login", loginRouter);




app.listen(3000, async () => {
  console.log("Server running on port 3000...");

  const user = await db.getUser(1);
  console.log(user);
});


// TODO: FINISH JWT TUTORIAL TIMESTAMP: 9:25 https://www.youtube.com/watch?v=7nafaH9SddU&ab_channel=TraversyMedia



