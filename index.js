const express = require("express")
const path = require("path")
const hbs = require("hbs")



const app = express()


 const connectDB = require("./server/database/connection");
 const UserDb = require("./server/model/model")



app.use(express.urlencoded({extended:false}))
app.use(express.json())



// setting view engine
app.set("view engine", "hbs")


// setting the views folder
app.set("views", path.join(__dirname,"views"))

//mongodb connection
 connectDB()




// setting  get router
 app.get("/", (req,res)=>{
    res.render("home.hbs")
})
app.get("/login", (req,res)=>{
    res.render("login.hbs")
})
app.get("/signup", (req,res)=>{
    res.render("signup.hbs")
})
app.get("/forget", (req,res)=>{
    res.render("forgetPassword.hbs")
})

// setting post router
app.post("/forget", async(req,res)=>{
    try{
        const userEmail = await UserDb.findOne({email:req.body.email})
        if(userEmail)
        res.send(userEmail.password)
    else
    res.send("Invalid email")
    }
    
    catch(err){
res.status(400).send(err)
    }
    
})

app.post("/login" , async(req,res)=>{
    try{
        const checkUsername = await UserDb.findOne({username : req.body.username})
if (checkUsername.password === req.body.password)
        res.render("thankyou.hbs")
    }
catch{
res.send("Invalid username or password")
}
})

app.post("/signup" ,async(req,res)=>{
    
    
    const data ={
        email : req.body.email,
        username:req.body.username,
        password:req.body.password
    }
    await UserDb.insertMany([data])
    res.render("thankyou.hbs")
    })
  

// port listening
app.listen(3000 , ()=>{
    console.log("Server started on http://localhost:3000");
})