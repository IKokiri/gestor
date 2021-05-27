const routes = require('express').Router();
const controller = require("../controller"); 
const route = "position";

routes.post(`/gestor/${route}/1.0/`, async (req, res, next)=>{
    
    const objeto  = await controller.create(req.body)
    res.status(201).json(objeto)
})

routes.get(`/gestor/${route}/1.0/`, async (req, res, next)=>{

    const objeto  = await controller.findAll()
    res.status(200).json(objeto)    
})

routes.get(`/gestor/${route}/1.0/:id`, async (req, res, next)=>{

    id= req.params.id
    const objeto  = await controller.findOne(id)
    res.status(200).json(objeto)
})

routes.put(`/gestor/${route}/1.0/:id`, async (req, res, next)=>{

    id = req.params.id
    dados = req.body
    const objeto  = await controller.update(id,dados)
    res.status(200).json(objeto)
})

routes.delete(`/gestor/${route}/1.0/:id`, async (req, res, next)=>{
    id = req.params.id
    const objeto  = await controller.delete(id)
    res.status(200).json(objeto)    
})

module.exports = routes;