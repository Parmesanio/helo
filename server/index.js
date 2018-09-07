const express           = require('express'),
      bodyParser        = require('body-parser'),
      massive           = require('massive'),
      session           = require('express-session'),
      aC                = require('./controllers/auth_controller.js'),
      app               = express();
      require('dotenv').config();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET
}));

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    })
    .catch(err => console.log('Err in massive', err));


app.post('/api/users', aC.create)


app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))