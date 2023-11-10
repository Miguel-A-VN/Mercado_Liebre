//Requerimos expres y path
const express = require('express');
const path = require('path');

//Ejecutamos expres y guardamos todas sus funciones en app
const app = express();

//Enlasamos la carpeta public para acceder a sus recursos
app.use(express.static(path.resolve(__dirname, '../public')));

//call to server ↓
app.listen(3030, () => {
    console.log('server online in the port 3000 => http://localhost:3030');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});