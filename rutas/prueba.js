;
const express = require('express')
let api = express.Router(),
    pruebaControl = require('../controles/prueba')

api.get('/get', pruebaControl.getDatos),
    api.post('/post', pruebaControl.postDatos),
    api.put('/put', pruebaControl.updateDatos),
    api.delete('/delete', pruebaControl.deleteDatos),

    module.exports = api