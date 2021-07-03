const express = require('express');
const app = express();
const mysql =require('mysql');
const router = express.Router();




router.get('/',(req,res)=>{
    res.send('<h1>Hola desde Peru con NGINX</h1>');
})

app.set('port', process.env.PORT || 7000);

//añadiendo el router
app.use('/',router);

app.listen(app.get('port'),()=>{
    console.log('listening port 7000')
    
});