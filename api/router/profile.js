const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile Model
const Profile = require('../../model/Profile');
//Load User Model
const User = require('../../model/User');

//Load profile validation
const validateProfileInput = require('../../validation/profile');

//@Route Get api/profile
//@Desc  Get current User Profile
//Access Private
router.get('/', passport.authenticate('jwt', { session : false }), (req, res) => {
    const errors = {};
    Profile.findOne({user : req.user.id})
        .populate('user',['name','avatar'])
        .then(profile => {
            if(!profile) {
                errors.noProfile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err))
});

//@Route Post api/profile
//@Desc  Create or edit profile
//Access Private
router.post('/', passport.authenticate('jwt', { session : false }), (req, res) => {
    const {errors, isValid} = validateProfileInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.social = {};

    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.status) profileFields.status = req.body.status;
    if(typeof req.body.skills !== 'undefined') profileFields.skills = req.body.skills.split(',');

    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({user: req.user.id})
    // .populate('users',['name','avatar'])
        .then(profile => {
            if(profile) {
                Profile.findOneAndUpdate({user: req.user.id},{$set: profileFields}, {new: true})
                    .then(res.json(profile))
            }else {
                //Create new
                Profile.findOne({handle: profileFields.handle})

                    .then(profile => {
                        if(profile) {
                            error.handle = 'That handle already exists';
                            res.status(400).json(error);
                        }

                        new Profile(profileFields).save()
                            .then(profile => res.json(profile));
                    })
            }
        })
});

module.exports = router;