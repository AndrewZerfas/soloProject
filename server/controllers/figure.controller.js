const Figure = require('../models/figure.model');
const jwt = require("jsonwebtoken");
const User = require('../models/user.model');
const Category = require('../models/figure.model');


module.exports = {



    getAllFigures: (req, res) => {
        Figure.find()
        .then((allFigures)=>{
            console.log(allFigures);
            res.json(allFigures);
        })
        .catch((err)=>{
            console.log("get all Figures failed");
            res.json({message: "failed to getAllFigures", error: err})
        })
    },

    /*getDigivolving: (req, res) => {
        Figure.findDigivolving({_category: req.params.category})
        .then((allDigivolving)=>{
            console.log(allDigivolving);
            res.json(allDigivolving);
        })
        .catch((err)=>{
            console.log("get all digivolving failed")
            res.json({message: "failed to get all digivolving", error: err})
        })
    },*/

    getCategory: (req, res) => {
        Figure.findCategory({category: req.params.category})
        .then((allCategory)=>{
            console.log(allCategory);
            res.json(allCategory);
        })
        .catch((err)=>{
            console.log("get all categories failed")
            res.json({message: "failed to get all categories", error: err})
        })
    },

    createFigure: (req, res)=>{
        const newFigureObject = new Figure(req.body);
        const decodedJWT = jwt.decode(req.cookies.usertoken,{
        complete: true
        })
        newFigureObject.createdBy = decodedJWT.payload.id
        newFigureObject.createdBy = req.jwtpayload.id;
        newFigureObject.save()
            .then((newFigure)=>{
                console.log(newFigure);
                res.json(newFigure)
            })
            .catch((err) =>{
                console.log("something went wrong with createFigure");
                res.status(400).json(err);
            })
    },
    //no login
    //createFigure: (req, res)=>{//
  //      Figure.create(newFigure)
  //          .then((newFigure)=>{
  //              console.log(newFigure);
  //              res.json(newFigure)
  //          })
  //          .catch((err) =>{
  //               console.log("something went wrong with createFigure");
 //               res.status(400).json(err);
  //          })
 //   },


    getOneFigure: (req, res) => {
        Figure.findOne({_id: req.params.id })
            .then((oneFigure) => {
                console.log(oneFigure);
                res.json(oneFigure);
            })
            .catch((err)=>{
                console.log("get one Figure failed");
                res.json({message: "failed to getOneFigure", error: err})
            })
    },

    updateFigure: (req, res) => {
        Figure.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then((updatedFigure) => {
            console.log(updatedFigure);
            res.json(updatedFigure)
    })
            .catch((err) => {
        console.log("updateFigure failed");
        res.status(400).json(err);
    })
    },

    deleteFigure: (req, res) => {
        Figure.deleteOne({ _id: req.params.id })
            .then((deletedFigure) => {
            console.log(deletedFigure);
            res.json(deletedFigure)
    })
            .catch((err) => {
            console.log("deleteFigure failed");
            res.json({message: "something went wrong with deleteFigure", error: err})
        })
    },
    
    findAllFiguresByUser: (req,res)=>{
    if(req.jwtpayload.username !== req.params.username){
        User.findOne({username: req.params.username})
        .then((userNotLoggedIn)=>{
            Figure.find({createdBy: userNotLoggedIn._id})
                .then((allFiguresFromUser)=>{
                    console.log(allFiguresFromUser);
                    res.json(allFiguresFromUser);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    }
    else{
        console.log("current user")
        console.log("req.jwtpayload.id:", req.jwtpayload.id);
        Figure.find({createdBy: req.jwtpayload.id})
        .then((allFiguresFromLoggedInUser)=>{
            console.log(allFiguresFromLoggedInUser);
            res.json(allFiguresFromLoggedInUser);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    }
}

};