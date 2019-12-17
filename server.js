const express = require('express');
const logger = require('morgan');

require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let models = require('./models');
models.sequelize.sync()
    .then(() => {
        console.log("Database running properly");
    }).catch(err => {
        console.log("Error occurred: ", err);
    });

require('./routes')(app);

const PORT = parseInt(process.env.PORT) || 8000;
app.listen(PORT, () => {
    console.log(`App started on PORT: ${PORT}`)
})