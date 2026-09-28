const express = require('express')


const app = express();


app.use(express.json());

const notes = [];

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    res.status(201).json({ message: "notes created succesfully" });
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetch succesfully",
        notes: notes
    });

})

//delete api 
//delete /notes/index 

app.delete('/notes/:index',(req,res)=>{

    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "notes delete successfully "
    })
})

//updATE
app.patch('/notes/:index',(req,res)=>{
    console.log(req.body);
    const index = req.params.index

    const description = req.body.description

    notes [index].description = description

    res.status(200).json({
        message: "notes update succesdfully "
    })
})
module.exports = app;
