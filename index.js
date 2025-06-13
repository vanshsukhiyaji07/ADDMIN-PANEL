const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    return res.render('index');
});

app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server", err);
        return false;
    }
    console.log(`Server is running on port ${port}`);
})