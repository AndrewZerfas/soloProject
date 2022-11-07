const mongoose = require("mongoose");

mongoose
.connect('mongodb://localhost/figuresDB' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() =>{ console.log('Connected to figuresDB database!')})

    .catch((err)=> {console.log("can't connect to figuresDB")})