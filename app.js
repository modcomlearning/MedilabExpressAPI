let express = require("express")
let mongoose = require("mongoose")
let routes = require("./routes/routes")
let body_pasrer = require('body-parser')
let cors = require("cors")

mongoose.connect("mongodb://localhost:27017/medilabs")
.then(() => {
    let app = express();
    app.use(cors())
    app.use(body_pasrer.urlencoded({extended: true}))
    app.use(express.json());
    app.use('/api', routes);
    app.use(body_pasrer.json())
    app.listen(3003,()=>{
        console.log("App is running on http://127.0.0.1:3003")
    })
})


// Location

// ADMIN
// LANDLORD
// STUDENT
// HOSTEL
// APARTMENT
// 