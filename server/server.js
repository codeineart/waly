/*
Enforces the use of strict javascript for
use ES6 classes syntax
*/
'use strict'

/**
 * USO EN DEBUGGING
 */
require('console-stamp')(console, {
  pattern: 'HH:MM:ss',
  colors: {
    stamp: ['yellow', 'bgBlack', 'bold'],
    label: ['green', 'bgBlack', 'bold'],
    metadata: 'green'
  }
})

/**
 * MANEJO DE PROCEDIMIENTOS DE ENTORNO
 */
if (process.env.NODE_ENV !== 'production') {
  // procedimientos en entorno de pruebas
} else {
  // procedimientos en entorno de producción
}

/**
 * REQUIRED LIBRARIES
 */
const morgan = require('morgan') // utilizado para loguear todos los requests en producción
const express = require('express') // servidor express
const bodyParser = require('body-parser') // body parser for json extraction
const cors = require('cors') // activar CORS
const mongoose = require('mongoose') // mongoDB schemas
const app = express() // instanciación de express
const passport = require('passport') // implementación de autentificación con passport
const passportConfig = require('./config/passport') // passport configuration
const http = require('http') // módulode node para uso de protocolo http
// const session = require('express-session') // express-session middleware

/**
 * CONFIGURACIÓN DE INSTANCIA
 * DE EXPRESS app
 */
import api from './routes/routes' // montaje de rutas en api
import { bd as MONGO_URL, port as APP_PORT } from './config/config' // montaje de configuraciones definidas
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // montaje de middleware bodyParser
app.use(bodyParser.json()) // montaje de módulo json de bodyparser
app.use(cors())
app.use(passport.initialize())
// app.use(passport.session())
app.use(express.static(__dirname + '/public'))

/**
 * CONEXIÓN DE BASE DE DATOS
 */
mongoose.Promise = global.Promise
mongoose
  .connect(MONGO_URL, {
    useMongoClient: true
  })
  .then(
    () => {
      console.log('Conectado a la base de datos')
    },
    err => {
      console.log('Ha ocurrido un error al intentar conectarse a la base de datos. Error:')
      console.log(err)
    }
  )

/**
 * INICIO DE SERVIDOR
 */
app.use('/api', api) // montaje de api en ruta '/api'
const server = http.createServer(app)
server.listen(APP_PORT, () => {
  console.log('Servidor corriendo en puerto ' + APP_PORT)
})
