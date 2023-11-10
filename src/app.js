const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));

//call to server ↓

app.listen(3030, () => {
    console.log('server online in the port 3000 => http://localhost:3030');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});