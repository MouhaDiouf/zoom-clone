const express = require('express'); 
const app = express();
const server = require('http').Server(app); 
const ejs = require('ejs')
app.set('view engine', 'ejs'); 


app.get('/', (req, res)=>{
    res.render('room')
})
server.listen(3000)