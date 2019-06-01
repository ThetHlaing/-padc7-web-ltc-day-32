const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    res.render('index');
})




app.listen(3000);