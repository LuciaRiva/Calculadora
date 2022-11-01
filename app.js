
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname,'/views/index.html'));  // Permite enviar un archivo HTML
 });
 app.use(express.static(path.join(__dirname, './public')));
 app.use(express.static(path.join(__dirname, './views')));
 
 
//const path = require('path');
//app.get('/views', (req, res) => {
//res.sendFile( path.join(__dirname, '/views/index.html'));});


 app.listen(process.env.PORT || 6060, () => {
     console.log("Servidor corriendo");
 });
app.use(express.static("public"));