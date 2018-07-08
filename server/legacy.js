var express = require('express')
var app = module.exports = express()

var Post = require(__dirname + "/models/legacy/post")
var Users = require(__dirname + "/models/legacy/users")
var Expediente = require(__dirname + "/models/legacy/expediente")
var Estudio = require(__dirname + "/models/legacy/estudio")
var Persona = require(__dirname + "/models/legacy/persona")
var Medicion = require(__dirname + "/models/legacy/medicion")
var Comentario = require(__dirname + "/models/legacy/comentario")
var Carrito = require(__dirname + "/models/legacy/carrito")

app.get('/users', (req, res) => {
  Users.find({}, '', function (error, users) {
    if (error) { console.error(error); }
    res.send({
      users: users
    })
  }).sort({ _id: -1 })
})
// Add new user
app.post('/users', (req, res) => {
  var db = req.db;
  var user = req.body.user;
  var pass = req.body.pass;
  var tipo = req.body.tipo;
  var mail = req.body.mail;
  var numero = req.body.numero;
  var new_user = new Users({
    user: user,
    pass: pass,
    tipo: tipo,
    numero: numero,
    mail: mail,
    logged_in: false,
  })
  new_user.save(function (error) {
    if (error) {
      //console.log(error)
    }
    res.send({
      success: true,
      message: 'User saved successfully!'
    })
  })

})
// SessionLogin boolean
app.put('/users/:user', (req, res) => {
  let db = req.db;
  Users.findOne({ user: req.params.user }, function (error, users) {
    if (error) { console.log(error); }
    users.logged_in = req.body.logged_in
    users.save(function (error) {
      if (error) {
        //console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})
// SessionLogOut boolean
app.put('/userslogout/:user', (req, res) => {
  let db = req.db;
  Users.findOne({ user: req.params.user }, function (error, users) {
    if (error) { console.log(error); }
    users.logged_in = req.body.logged_in
    users.save(function (error) {
      if (error) {
        //console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})



// Verifica la unicidad de usuario
app.post('/UniqueUser', (req, res) => {
  var db = req.db;
  var user = req.body.user;

  //console.log(user);

  Users.findOne({ 'user': user }, 'user', function (err, user) {
    //console.log(user)
    if (err) return handleError(err)
    res.send({
      usuario: user ? true : false
    });
  });

})

app.post('/UniqueMail', (req, res) => {
  var db = req.db;
  var mail = req.body.mail;

  //console.log(mail);

  Users.findOne({ 'mail': mail }, 'mail', function (err, mail) {
    //console.log(mail)
    res.send({
      correo: mail ? true : false
    });
  })

})


app.post('/user', (req, res) => {
  var db = req.db;
  var user = req.body.user
  var pass = req.body.password
  Users.findOne({ 'user': user, 'pass': pass }, 'user pass tipo numero mail', function (err, user) {
    if (err) { console.error(err) }
    if (user) {
      res.send({
        tipo: user.tipo,
        success: true
      })
    }
    else {
      res.send({
        success: false
      })
    }
  })
})

// Edit User
app.put('/EditUser', (req, res) => {
  let db = req.db;
  console.log(req.body)
  var id = req.body._id
  Users.findById(id, 'user pass numero mail tipo', function (error, user) {
    if (error) { console.log(error); }
    user.user = req.body.user
    user.pass = req.body.pass
    user.numero = req.body.numero
    user.mail = req.body.mail
    user.tipo = req.body.tipo
    user.save(function (error) {
      if (error) {
        //console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.put('/DeleteUser', (req, res) => {
  var db = req.db;
  console.log(req.body._id)
  var id = req.body._id
  Users.findByIdAndRemove(id, function (err, offer) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})



/**
 * Estudios Model
 */

app.post('/estudios', (req, res) => {
  var db = req.db;
  var expediente_id = req.body.expediente_id;

  Estudio.find({ 'expediente_id': expediente_id }, '', function (err, estudios) {
    //console.log(estudios)
    if (err) { console.error(err); }
    res.send({
      estudios: estudios
    })
  });
})

app.post('/UniqueEstudio', (req, res) => {
  var db = req.db;
  var titulo = req.body.titulo;

  //console.log(titulo);

  Estudio.findOne({ 'titulo': titulo }, 'titulo', function (err, estudio) {
    //console.log(estudio)
    if (err) return handleError(err)
    res.send({
      estudio: estudio ? true : false
    });
  });

})

// Add new estudio
app.post('/addEstudio', (req, res) => {
  var db = req.db;
  var titulo = req.body.titulo;
  var descripcion = req.body.descripcion;
  var grupo_actual = req.body.grupo_actual;
  var expediente_id = req.body.expediente_id;

  var new_estudio = new Estudio({
    titulo: titulo,
    descripcion: descripcion,
    grupo_actual: grupo_actual,
    expediente_id: expediente_id,

  });


  new_estudio.save(function (error) {
    if (error) {
      //console.log(error)
    }
    res.send({
      success: true,
      message: 'Estudio saved successfully!'
    })
  })

})

app.put('/ActualizarGrupo', (req, res) => {
  let db = req.db;

  var id = req.body.estudio_id
  Estudio.findById(id, function (error, estudio) {
    if (error) { console.log(error); }

    estudio.grupo_actual = estudio.grupo_actual + 1

    estudio.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})


app.put('/EditarEstudio', (req, res) => {
  let db = req.db;
  console.log(req.body)
  var id = req.body._id
  Estudio.findById(id, 'titulo descripcion', function (error, estudio) {
    if (error) { console.log(error); }
    estudio.titulo = req.body.titulo
    estudio.descripcion = req.body.descripcion
    estudio.save(function (error) {
      if (error) {
        //console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.put('/deleteEstudio', (req, res) => {
  var db = req.db;
  var id = req.body.estudio
  Estudio.findByIdAndRemove(id, function (err, offer) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.put('/DeleteEstudios', (req, res) => {
  var db = req.db;
  var id = req.body.expediente
  console.log(id)
  Estudio.remove({ expediente_id: id }, function (err, offer) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

/** Expedientes Model */

app.get('/expedientes', (req, res) => {
  Expediente.find({}, '', function (error, expedientes) {
    if (error) { console.error(error); }
    res.send({
      expedientes: expedientes
    })
  }).sort({ _id: -1 })
  // res.send(
  //   [{
  //     title: "Hello World!",
  //     description: "Hi there! How are you?"
  //   }]
  // )
})

app.post('/expedientes', (req, res) => {
  var db = req.db;
  var titulo = req.body.titulo;
  var descripcion = req.body.descripcion;

  var new_expediente = new Expediente({
    titulo: titulo,
    descripcion: descripcion,
  })

  new_expediente.save(function (error) {
    if (error) {
      //console.log(error)
    }
    res.send({
      success: true,
      message: 'Expediente saved successfully!'
    })
  })
})

app.get('/FindIdExpediente', (req, res) => {
  var db = req.db
  var id = req.body.id
  Expediente.findById(id, function (err, expediente) {
    if (err) { console.error(err) }
    res.send({
      expediente: expediente
    })
  })
})

app.post('/UniqueExpediente', (req, res) => {
  var db = req.db;
  var titulo = req.body.titulo;

  Expediente.findOne({ 'titulo': titulo }, 'titulo', function (err, expediente) {

    if (err) return handleError(err)
    res.send({
      titulo: expediente ? true : false
    });
  });
})

app.put('/EditarExpediente', (req, res) => {
  let db = req.db;
  console.log(req.body)
  var id = req.body._id
  Expediente.findById(id, 'titulo descripcion', function (error, expediente) {
    if (error) { console.log(error); }
    expediente.titulo = req.body.titulo
    expediente.descripcion = req.body.descripcion
    expediente.save(function (error) {
      if (error) {
        //console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.put('/DeleteExpediente', (req, res) => {
  var db = req.db;
  var id = req.body.expediente
  Expediente.findByIdAndRemove(id, function (err, expediente) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})


/**
 * Personas Model
 */

// Add Persona
app.post('/addPersona', (req, res) => {
  var db = req.db;
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  var sexo = req.body.sexo;
  var gse = req.body.gse;
  var notas = req.body.notas;

  var new_persona = new Persona({
    nombre: nombre,
    edad: edad,
    sexo: sexo,
    gse: gse,
    notas: notas,
  });


  new_persona.save(function (error) {
    if (error) {
      console.log(error)
    }

    res.send({
      success: true,
      message: 'Estudio saved successfully!',
    })
  })

})

// Get last inserted persona_id

app.get('/getLastPersona', (req, res) => {
  Persona.find({}, '', function (error, persona) {
    if (error) { console.error(error); }
    res.send({
      success: true,
      persona: persona
    })
  }).sort({ _id: -1 }).limit(1)
})

app.get('/getPersonas', (req, res) => {
  Persona.find({}, '', function (error, personas) {
    if (error) { console.error(error); }
    res.send({
      personas: personas
    })
  }).sort({ _id: -1 })
})


/**
 * Comentarios Model
 */
// Add new comentario
app.post('/addComentario', (req, res) => {
  var db = req.db;
  console.log(req.body);
  var usuario = req.body.usuario;
  var comentario = req.body.comentario;
  var estudio_grupo = req.body.estudio_grupo;
  var estudio_id = req.body.estudio_id;
  var tiempo = req.body.tiempo;

  var new_comentario = new Comentario({
    usuario: usuario,
    comentario: comentario,
    estudio_grupo: estudio_grupo,
    estudio_id: estudio_id,
    tiempo: tiempo,
  });


  new_comentario.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,

      message: 'Comentario saved successfully!'
    })
  })

})

/** Mediciones MOdel */

// Get Mediciones por grupo
app.post('/medicionesGrupo', (req, res) => {
  var db = req.db
  var grupo = req.body.grupo
  console.log(grupo)
  Medicion.find({ 'grupo': parseInt(grupo) }, '', function (err, mediciones) {
    if (err) { console.error(err) }
    res.send({
      success: true,
      mediciones: mediciones
    })
  })
})

// Add new medicion
app.post('/addMedicion', (req, res) => {
  var db = req.db;
  var estudio_id = req.body.estudio_id;
  var persona_id = req.body.persona_id;
  var estudio_grupo = req.body.grupo;
  var json = req.body.json;

  var new_medicion = new Medicion({
    estudio_id: estudio_id,
    persona_id: persona_id,
    grupo: estudio_grupo,
    json: json,
  });


  new_medicion.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Medicion saved successfully!'
    })
  })

  console.log(new_medicion._id)

})

// Eliminar Medicion
app.put('/deleteMedicion', (req, res) => {
  var db = req.db;
  var id = req.body._id
  Medicion.findByIdAndRemove(id, function (err, medicion) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// Carrito Model

app.post('/AddEstudioCarrito', (req, res) => {
  var db = req.db;
  var productos_json = req.body.productos_json;
  var descuento = req.body.descuento;
  var total = req.body.total;
  var new_carrito = new Carrito({
    productos_json: productos_json,
    descuento: padescuentoss,
    total: total,
    logged_in: false,
  })
  new_carrito.save(function (error) {
    if (error) {
      //console.log(error)
    }
    res.send({
      success: true,
      message: 'User saved successfully!'
    })
  })

})

app.put('/DeleteCarrito', (req, res) => {
  var db = req.db;
  var id = req.body._id
  Carrito.findByIdAndRemove(id, function (err, medicion) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})
