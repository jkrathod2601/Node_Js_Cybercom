
require("dotenv").config();
require('./core/global')



const sequelize=require('./util/database.js')

sequelize.sync().then((data)=>{
  // console.log(data)
}).catch((err)=>[
  console.error(err)
])



var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
const productroute=require('./routes/product')

var app = framework.express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(framework.express.json());
app.use(framework.express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(framework.express.static(path.join(__dirname, 'public')));

app.use(usersRouter);
app.use(productroute)
// require('./util/serviceloader')

app.get('*',(req,res)=>{
  res.status(404).send("not found")
})



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
