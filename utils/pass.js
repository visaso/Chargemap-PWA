'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// local strategy for username password login
passport.use(new Strategy(
    async (username, password, done) => {
      console.log(username, password);
      try {
        const user = await userModel.findOne({username});
        console.log('Local strategy', user);
        if (user === null) {
          return done(null, false, {message: 'Incorrect email.'});
        }
        console.log('pw', password, user.password);
        const validate = await bcrypt.compare(password, user.password);
        if (!validate) {
          return done(null, false, {message: 'Incorrect password.'});
        }

        const strippedUser = user.toObject();
        delete strippedUser.password;
        console.log('deleted pwd', strippedUser);
        return done(null, strippedUser, {message: 'Logged In Successfully'});
      }
      catch (err) {
        return done(err);
      }
    }));

// TODO: JWT strategy for handling bearer token
passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'asd123',
    },
    async (jwtPayload, done) => {
      console.log('payload', jwtPayload);
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      try {
        const user = await userModel.findById(jwtPayload._id,
            '-password -__v');
        console.log('pl user', user);
        if (user !== null) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
      catch (e) {
        return done(null, false);
      }
    },
));

module.exports = passport;
