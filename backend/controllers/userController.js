const db = require("../db/queries");

exports.createUser = (req, res) => {
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;
  const email = req.params.email;
  const password = req.params.password;
  const isAuthor = req.params.isAuthor;

  db.createUser(firstName, lastName, email, password, isAuthor);
};
