const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.get('/courses', (req, res) => { 
    res.send()
})

app.listen(port, () => {
    console.log('server running on port ' + port);
});
