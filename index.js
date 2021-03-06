const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Register = require('./models/registrationModel')
const app = express();


// Middle ware
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//use sessions for tracking logins
app.use(session({
    secret: 'thesecret`',
    resave: true,
    saveUninitialized: false
}));

// using the static files
app.use(express.static(path.join(__dirname, 'public')))

passport.use(new LocalStrategy(Register.authenticate()));
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

passport.deserializeUser(function(id, done) {
    Register.findById(id, function(err, user) {
      done(err, user);
    });
  });

//mongoose db connection
mongoose.connect("mongodb://localhost:27017/JUNIOR-BABY-CENTER", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// import routes
const registrationRoutes = require('./routes/registrationroutes');
app.use('/register', registrationRoutes);
const loginRoutes = require('./routes/loginroutes');
app.use('/login', loginRoutes);


//logout
app.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/login');
            }
        })
    }
    
})

// Listening for requests: the server!
app.listen(4000, () => {
    console.log(`Express running → PORT 4000`);
});






