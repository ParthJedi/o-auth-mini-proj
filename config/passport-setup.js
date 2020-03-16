const passport =  require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const InstagramStrategy = require('passport-instagram');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
    // options for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}), () => {
    // cb function for passport
})

// passport.use(
//     new FacebookStrategy({
//     // options for facebook strategy

// }), () => {
//     // cb function for passport
// })

// passport.use(
//     new InstagramStrategy({
//     // options for instagram strategy

// }), () => {
//     // cb function for passport
// })

// passport.use(
//     new TwitterStrategy({
//     // options for twitter strategy

// }), () => {
//     // cb function for passport
// })