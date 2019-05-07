const express = require("express");
const router = express.Router(); 
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//load user model 
const User = require("../../models/User");




//@route GET api/users/test
//@des Tests post route
//@access Public 
router.get("/test", (req,res) =>
    res.json({msg: "Users works"})
); 

//@route GET api/users/register
//@desc Register user
//@access Public 
router.post("/register", (req,res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({email: "email already exists"});
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: "200", //size
                    r: "pg", //rating
                    d: "mm", //default
                });
                const newUser = new User({
                    lastname:req.body.lastname,
                    firstname:req.body.firstname,

                    email:req.body.email,
                    avatar: avatar,
                    password:req.body.password,
                });
                bcrypt.genSalt(10, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});



//@route GET api/users/login
//@desc Login user / Returning JWT Token
//@access Public 

router.post("/login", (req,res) => {
    const email = req.body.email;
    const password = req.body.password; 
    
    //find user by email;
    User.findOne({email})
        .then(user => {
            //check for user
            if(!user){
                return res.status(404).json({email: "User email not found"});
            }

            //Check password; 
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        //User matched
                        const payload = { id: user.id, name : user.name, avatar: user.avatar} //create jwt payload

                        //sign Token
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, {expiresIn:3600}, 
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                        });
                    } else{
                        return res.status(400).json({password: "Password incorrect"})
                    }
                })
            })
        });


// @route GET api/users/current
// @des Return current user
// @access Private
router.get("/current", passport.authenticate("jwt", {session: false}),(req,res) =>{
    console.log("hello fred");
    res.json({
        id: req.user.id,
        lastname : req.user.lastname,
        firstname: req.user.firstname,
        email: req.user.email,
    });
});

// router.get("/current", (req,res) => {
//     console.log("hello abi");
//     console.log(req.user);
// })

module.exports = router;