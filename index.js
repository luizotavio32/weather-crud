// const app = require('express')()
// const http = require('http')
// const swaggerUi = require('swagger-ui-express')
// const swaggerFile = require('./swagger_output.json')
// const routes = require('./src/routes/routes.js');

// http.createServer(app).listen(3000)
// console.log("Listening at:// port:%s (HTTP)", 3000)

// app.use('/doc', routes, swaggerUi.serve, swaggerUi.setup(swaggerFile))

//require('./routes/routes')(app)

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const express = require('express')
const app = express()

/* Routes */
const router = require('./src/routes')

/* Middlewares */
app.use(router)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})