<<<<<<< d43e25f626e24526c920b1a86e39de4d170e9c4c
=======

const passport = require('passport');
const bcrypt = require('bcrypt');
const models = require('../db/index.js');
const User = models.User;

module.exports.signup = function(req, res) {

  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(req.body.hash, salt);

  let newUser = {
    username: req.body.username,
    hash: hashedPassword,
    salt: salt,
    account_type: req.body.account_type,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }

  User.create(newUser).then(function() {
    res.status(201).send();
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
}
>>>>>>> /signup creating new record with passportJS; need to work on /login
