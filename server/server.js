require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        
    }))

    app.use(cookieParser());

require("./config/mongoose.config");

require("./routes/user.routes")(app);
require("./routes/figure.routes")(app);

app.listen(process.env.MY_PORT, () => 
    console.log('Listening on Port 8000'))