const express = require('express')
const app = express()
const path = require ('path') // Libreria nativa de node que permite armar las rutas
const exphbs = require ('express-handlebars')
const flash = require('./node_modules/connect-flash');
const session = require('express-session')
const passport = require('passport');


const {}= require('./routes/recipesRoutes')
require('./config/passport');


const port = 3000;

app.engine(".hbs", exphbs({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layout"),
  partialsDir: path.join(__dirname, "views/partials"),
  extname: ".hbs"
}));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// public static
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: false})) // Para solucionar el undefined en la req del body. Por algun motivo no pude usar bodyParser
app.use(express.static(path.join(__dirname, '../client'))) // Midellware de rutas para archivos estaticos

app.use( session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//Variables globales
app.use((req,res,next) =>{
  res.locals.success_msg = req.flash('success_msg')
  res.locals.user = req.user || null;
  next();
})


//GET
app.use(require('./routes/recipesRoutes'))
app.use(require('./routes/usersRoutes'))



app.listen(port) // definimos el puerto en el que corre el servidor
console.log(`Server corriendo en http://localhost:${port}`)