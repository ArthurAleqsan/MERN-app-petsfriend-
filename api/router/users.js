const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


//load input validation
const validateRegisterInput = require('../../validation/registration');
const validateLoginInput = require('../../validation/login');

//Load User model
const User = require('../../module/User');

//@Route Post api/users/registration
//@Desc  Register users route
//Access Public
router.post('/registration', (req, res) => {
    const {errors,isValid} = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email : req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).json({email:'Email already exists.'});
            }else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', //Size
                    r: 'pg', //Rating
                    d:'mm'   //Default
                });
                const newUser = new User({
                    name : req.body.name,
                    email : req.body.email,
                    role : req.body.role,
                    avatar : avatar,
                    password : req.body.password
                });

                bcrypt.genSalt(10,(err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
});
//@Route Post api/users/login
//@Desc  Login User JWT Token
//Access Public
router.post('/login', (req, res) => {
    const {errors,isValid} = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    //Find user by email
    User.findOne({email : email})
        .then(user => {
            if(!user) {
                errors.email = 'Email not found';
                return res.status(404).json(errors);
            }
            //decode password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id : user.id, name : user.name, avatar : user.avatar};

                        jwt.sign(payload, keys.secureOrKey, {expiresIn : 4600}, (err, token) => {
                            res.json({
                                success : true,
                                token : 'Bearer ' + token,
                            });
                        });
                    }else {
                        errors.password = 'Password is not correct'
                        return res.status(400).json(errors);
                    }
                })
        })
});

module.exports = router;