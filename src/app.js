//Requerimos expres y path
const express = require('express');
const path = require('path');

//Ejecutamos expres y guardamos todas sus funciones en app
const app = express();

//Enlasamos la carpeta public para acceder a sus recursos
app.use(express.static(path.resolve(__dirname, '../public')));

//call to server ↓
app.listen(4321, () => {
    console.log('server online in the port 4321 => http://localhost:4321');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});
app.get('/sign-up', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/sign-up.html'));
});
app.get('/log-in', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/log-in.html'));
});

app.post('/sign-up', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.post('/log-in', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});