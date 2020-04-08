'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', {session: false},
        async (err, user, info) => {
          try {
            console.log('controller info', info);
            if (err || !user) {
              reject(info.message);
            }
            req.login(user, {session: false}, async (err) => {
              if (err) {
                reject(err);
              }
              // generate a signed son web token with the contents of user object and return it in the response
              const token = jwt.sign(user, 'asd123');
              resolve({user, token});
            });
          }
          catch (e) {
            reject(e.message);
          }
        })(req, res);
  });
};

const checkAuth = (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', (err, user) => {
      if (err || !user) {
        reject('Not authenticated or user expired');
      }
      resolve(user);
    })(req, res);
  });
};

module.exports = {
  login,
  checkAuth,
};
