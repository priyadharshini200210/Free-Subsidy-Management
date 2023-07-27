require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const cors = require("ejs");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const manageauthRoutes = require("./routes/manageauth");
const manageusersRoutes = require("./routes/manageusers");
const adminusersRoutes = require("./routes/adminusers");
const adminauthRoutes = require("./routes/adminauth");
const registeredusersRoutes = require("./routes/registeredusers");
const studentfeedbackRoutes = require("./routes/studentfeedback");
// const displaydataRoutes=require("./routes/displaydata");



// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// app.set('view engine','ejs');
// app.engine('ejs', require('ejs').__express);
// app.get('/api',(req,res)=>{
//     res.render('index')
// })

// const Ruser=mongoose.model('registereduser')

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/manageauth", manageauthRoutes);
app.use("/api/manageusers", manageusersRoutes);
app.use("/api/adminauth", adminauthRoutes);
app.use("/api/adminusers", adminusersRoutes);
app.use("/api/registeredusers", registeredusersRoutes);
app.use("/api/studentfeedback", studentfeedbackRoutes);
// app.use("/api/displaydata", displaydataRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));