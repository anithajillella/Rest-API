const express = require('express');
const mongoose= require('mongoose');
const brandName = require('./model')

const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://AnithaJillella:Anitha@cluster0.rpkuhzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

app.post('/addbrands',async(reg,res) =>{
    const {brandName} = req.body;
    try{
        const newDate  = new BrandName({brandName});
        newDate .save();
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getallbrands/:id',async (req,res) => {
    try{
        const Data = await BrandName.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
})

app.delete('/deletebrand',async (req,res) => {
    try{
           await BrandName.findByIdAndDelete(req.params.id);
            return res.json(await BrandName.find)
    }
    catch(err){
        console.log(err.message);
    }
})
app.listen(3000,()=>console.log('server running...'))