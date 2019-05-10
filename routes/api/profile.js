const express = require("express");
const router = express.Router(); 
const passport = require('passport');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');



//load validation for profile
const validateProfileInput = require("../../validation/profile");

//Load profile model 
const Profile = require("../../models/Profile"); 

//Load user profile
const User = require("../../models/User");

//@route GET api/posts/test
router.get("/test", (req,res) =>
    res.json({msg: "profile works"})
); 

//@route GET api/profile
//@desc get current users profile
//@access Private
router.get("/", passport.authenticate("jwt", {session:false}), (req,res) => {
    const errors = {};
    Profile.findOne({user : req.user.id})
        .populate("user",["lastname","firstname","email","avatar"])
        .then(profile => {
            if(!profile){
                errors.noprofile = "there is no profile for this user";
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

//@route POST api/profile
//@desc Create user profile
//@access Private
router.post("/", passport.authenticate('jwt', {session:false}), (req,res) => {
    console.log("hellofred2");

    // const{errors, isValid} = validateProfileInput;
    const{errors, isValid} = validateProfileInput;

    console.log("hellofred");

    // check validation
    // if(!isValid){
    //     return res.status(400).json(errors);
    // } 

    //Get fields
    const profileFields = {};
    console.log("ok you are connected");
    //Will permit to get infos for user model
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.title) profileFields.title = req.body.title;
    if(req.body.tagline) profileFields.tagline = req.body.tagline;


    console.log(req.body.handle,"you have something fred");


    Profile.findOne({user: req.user.id })
        .then(profile => {
            console.log("profile is find");
            if(profile){
                console.log("profileistrue");
                //update
                Profile.findOneAndUpdate({user:req.user.id}, {$set:profileFields},{new:true}
                    )
                    .then(profile => res.json(profile));
            } else {
                //create
                //Check if handle exists
                Profile.findOne({handle:profileFields.handle})
                    .then(profile => {
                        if(profile){
                            errors.handle = "that handle already exists";
                            res.status(400).json(errors);
                        }
                        //save profile
                        new Profile(profileFields).save().then(profile => res.json(profile))
                    })
                
            }
        })

});

module.exports = router;