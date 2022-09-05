const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const query = req.query

    res.json({
        msg: "Get api desde controlador",
        query
    });
}


const  usuariosPost = (req, res = response) => {

    const { nombre, edad} = req.body;


    res.json({
        msg: "Post api desde controlador",
        nombre,
        edad
    });
}

const  usuariosPut = (req, res = response) => {

    const idusuario = req.params.idusuario

    res.json({
        msg: "Put api desde controlador",
        idusuario
    });
}


const  usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete api desde controlador",
    });
}

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };