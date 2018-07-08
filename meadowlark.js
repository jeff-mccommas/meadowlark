const express = require('express');
var app = express();
var handlebars = require('express-handlebars') 
.create({ defaultLayout:'main' }); 
app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(req,res);
res.type('text/plain');
res.status(404);
res.send('404 - Not Found');
app.use(function (err,req,res,next) {
    console.error(err.stack);
    re.type('text/plain');
    res(500);
    res.send('server-error');
    app.listen('port'),function () {
        console.log('server is started');
        app.get('port');

    }


})