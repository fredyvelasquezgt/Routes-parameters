const express = require('express');
const app = express();

//dynamic route - creo un patron que va a ser seguido para todas las preguntas
app.get('/questions/:id/:title', (req, res) => {
    res.send('this route handles all the questions')
});

//route en donde accedo a los params
app.get('/users/:id/:username', (req, res) => {
    let userId = req.params.id;
    let user = req.params.username;
    res.send('This route will handle ' + user + ' profile that has id ' + userId)
})

app.listen(3000, ()=> {
    console.log('listen on 3000')
})