const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Working!');

});
app.listen(5000, console.log.bind(console, "Conslole listening on port 5000.."));