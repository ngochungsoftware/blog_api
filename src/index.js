const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./resources/routes')
const db = require('./config/db')


// connect to db
db.connect();

app.use(express.urlencoded({
  extended: true
}));


app.use(express.json());
//  kiem tra anh thongt qua path
app.use(express.static(path.join(__dirname, 'public')))
// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b, 
  }

}))
app.set('view engine', 'hbs' )
app.set('views', path.join(__dirname, 'resources','views'))

console.log('PATH: ', path.join(__dirname, 'resources/views'))

// routes init
route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})