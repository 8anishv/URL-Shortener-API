const express = require("express");
const ConnectDB = require("./config/db")
const cors = require("cors")

const app = express();
//connect to database
ConnectDB();

app.use(cors());

app.use(express.json({extended : false}));

//Defining routes

app.use('/' , require("./routes/index"));
app.use('/api/url' , require("./routes/Url"));


const PORT = 5000

app.listen(PORT , ()=>{
    console.log(`Server is running in the port ${PORT}`);
})