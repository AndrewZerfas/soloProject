const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

        register: (req, res)=>{

            const user = new User(req.body);

            user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log("Successfully Registered");
                res.json({
                    successMessage: "Thanks for registering",
                    user: newUser
                });
            })
            .catch((err)=>{
                console.log("Registration unsuccessful")
                res.status(400).json(err);
            })

        },

            login: (req, res)=>{

                User.findOne({email: req.body.email})
                .then((userRecord)=>{
                    if(userRecord == null){

                        res.status(400).json({message: "Login failed"})

                    }
                    else{
                        bcrypt.compare(req.body.password , userRecord.password)
                            .then((isPasswordValid)=>{
                                if(isPasswordValid){
                                    console.log("password is valid");

                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },

                                        process.env.JWT_SECRET

                                    ),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000000)
                                    },

                                ).json({
                                    message: "Successfully",
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                });

                                }
                                else{
                                    res.status(400).json({
                                        message: "Username or email invalid"
                                    })

                                }

                                
                            })
                            .catch((err)=>{
                                console.log(err);
                                res.status(400).json({message: "invalid attempt"});
                            })
                    }
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json({message: "invalid attempt"});
                })
            },

            logout: (req, res) =>{
                console.log("logged out");
                res.clearCookie("usertoken");
                res.json({
                    message: "You have successfully logged out",
                });
            },
            getOneUser: (req, res) => {
                User.findOne({_id: req.params.id })
                    .then((oneUser) => {
                        console.log(oneUser);
                        res.json(oneUser);
                    })
                    .catch((err)=>{
                        console.log("get one User failed");
                        res.json({message: "failed to getOneUser", error: err})
                    });
            },

            getLoggedInUser: (req,res) =>{
                User.findOne({_id: req.jwtpayload.id})
                .then(user => res.json(user))
                .catch(err => res.json(err))
            },

            findAllUsers: (req, res)=>{
                User.find()
                .then((allUsers)=>{
                    res.json(allUsers);
                })
                .catch((err)=>{
                    console.log("Find All Users Failed");
                    res.json({message:"something went wrong with find all users", error:err})
                })
            }


        }