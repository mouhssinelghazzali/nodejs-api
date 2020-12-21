let express =  require("express")
let app =  express()
let mongoose = require('mongoose')
let bodyParser =  require('body-parser')
let cors =  require("cors")
require("dotenv/config")
app.use(bodyParser.json())

//import Routes

let  postsRoute  = require("./routes/posts")

app.use(cors())
app.use('/posts',postsRoute)

//ROUTES
app.get("/",(req,res) => {

    res.send("We are on home ")
})



//connect to DB

mongoose.connect(process.env.DB_CONNECTION,
    {   useNewUrlParser: true,
        useUnifiedTopology: true  },
     () => { console.log("connected to DB")
})

app.listen(3000)


