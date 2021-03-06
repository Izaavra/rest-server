const {response} = require("express");

const userGet = (req, res = response) => {
    
    const {q, nombre = 'no name', apikey, page = '1', limit} = req.query;
    
    res.json({
        msg: 'get API, controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}
const userPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'put API, controlador',
        id
    })
}

const userPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API, controlador',
        nombre,
        edad,
    })
}

const userPath = (req, res) => {
    res.json({
        msg: 'patch API, controlador'
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API, controlador'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPath
}