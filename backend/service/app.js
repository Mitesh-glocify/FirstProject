const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
var mysql = require('mysql2');
var bodyParser = require('body-parser')
const logger = require('../utils/logger');
var apiRouter = require("../routes/users");
const app = express();

// MYSQL
app.use(function(req, res, next) {
	res.locals.connection = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'crud',
	});
	next();
});


 


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/", apiRouter);
// @todo implementation

module.exports = app;
