const express = require('express');
const router = express.Router();
const passport = require('passport');
const Register = require('../models/registrationModel')

// gets and displays a register page
router.get('/', (req, res) => {
    res.render('register', {title: "Register"})
})

// submits a register page information
// router.post('/', async (req, res) => {
//     const register = new Register(req.body)
//     try {
//         await register.save()
//         console.log('Item has been saved')
//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/login');
//         });
//         // res.redirect('/login')
//     } catch (err) {
//         // res.status(500).send('unable to save to database')
//         console.log(err)
//         res.render('register', { error: "Failed to save to db" })
//     }


// })


router.post('/', function(req, res) {
    console.log(req.body)
    Register.register(new Register(req.body), req.body.password, function(err) {
        if (err) {
            // alert("unsuccessful registration")
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/login');
        });
    });
  });

//returns a specific page
router.get('/search', async (req, res) => {
    if (req.session.user) {
        // console.log(req.session.user)
        try {
            // let allows for variable reassigment
            let items = await Register.find()
            if (req.query.club) {
                items = await Register.find({ club: req.query.club })
            }
            res.render('list', { users: items, currentUser: req.session.user })
        } catch (err) {
            res.status(500).send('Unable to search the database')
        }
    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})

//deletes a specific item
router.post('/delete', async (req, res) => {
    try {
        await Register.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(500).send('unable to delete from database')
    }
})

module.exports = router;











//async functions returns a promise

//await only blocks the code execution within the async function.

//A Promise is a value returned by an asynchronous function to indicate the completion of the processing carried out by the asynchronous function.

 //deleteOne Removes a single document from a collection.


