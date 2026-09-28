const app = require("./src/app.js")


app.get('/', (req,res)=>{
    console.log("hello");
})
app.listen(3000,()=>{
    console.log("sever running on on port 3000")
})