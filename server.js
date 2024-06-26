const express = require('express');
const cors = require('cors')
const app = express();
const postData = require('./routes/formDataSubmission');
const indexPage = require('./routes/homePageDisplay')

// Using middle ware functions
app.use(cors());
app.use(express.static('assets'))
app.use(express.urlencoded({ extended: false,
    limit: 10000,
    parameterLimit: 2,
}))


// Routers to handle user inputs and requests
app.use('/', indexPage)
app.use('/register/', postData);

app.listen(8440, ()=>console.log("I am listening on port 8440"))