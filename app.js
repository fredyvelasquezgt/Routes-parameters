const express = require('express');
const app = express();

//dynamic route
app.get('/questions/:id/:title', (req, res) => {
    res.send('this route handles all the questions')
});


app.get('/users/:id/:username', (req, res) => {
    let user = req.params.username;

    res.send('This route will handle ' + user + ' profile')
})

app.listen(3000, ()=> {
    console.log('listen on 3000')
})