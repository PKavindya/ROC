const express=require("express");
const app=express();
const session=require("express-session")
const config=require('config')

const helmet = require("helmet");
app.use(helmet());


const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use((session({
secret:"ABCDefg",
resave:false,
saveUninitialized:true
})))


const member = require("./routes/member");
const committee = require("./routes/committee");
const lecturer = require("./routes/lecturer");
const project = require("./routes/project");
const sponsorclub = require("./routes/sponsor_club");

app.use("/api/member", member);
app.use("/api/committee", committee);
app.use("/api/lecturer", lecturer);
app.use("/api/project", project);
app.use("/api/sponsorclub", sponsorclub);

app.listen(3001,()=>{
    console.log("server running on port 3001");
    
    });
