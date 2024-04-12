// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//? This line initializes a new instance of the express handlebars
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
//? here we register the handlebars engine with express
app.engine('handlebars', hbs.engine);
//? sets the default view engine for rendering views, express will use HB by default
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
