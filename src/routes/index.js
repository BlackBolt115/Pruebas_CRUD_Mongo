const express = require('express');
const router = express.Router();

const Task = require('../models/task');
const Colab = require('../models/colaboradores.js');
const Unidad = require('../models/unidades.js');
const Depart = require('../models/departamento.js');

router.get('/', async(req, res) =>{
    res.render('index');
});

//--------------CRUD_COLABORADORES--------------------//
router.get('/colab', async(req, res) =>{
    const colaboradores = await Colab.find();
    res.render('colab',{
        colaboradores
    });
});

router.post('/colab/add', async(req, res) =>{
    const colaboradores = new Colab(req.body);
    await colaboradores.save();
    console.log(colaboradores);
    res.redirect('/colab');
});

router.post('/colab/edit/:id', async(req, res) =>{
    const {id} = req.params;
    await Colab.updateOne({_id: id}, req.body);
    res.redirect('/colab');
});

router.get('/colab/edit/:id', async(req, res) =>{
    const {id} = req.params;
    const colaboradores = await Colab.findById(id);
    res.render('./colab/edit', {
        colaboradores
    });
});

router.get('/colab/delete/:id', async(req, res) =>{
    const {id} = req.params;
    await Colab.remove({_id: id});
    res.redirect('/colab');
});


//--------------CRUD_UNIDADES--------------------//
router.get('/unidades', async(req, res) =>{
    const colaboradores = await Colab.find();
    res.render('unidades',{
        colaboradores
    });
});

router.post('/unidades/add', async(req, res) =>{
    const colaboradores = new Colab(req.body);
    await colaboradores.save();
    console.log(colaboradores);
    res.redirect('/unidades');
});

router.get('/unidades/turn/:id', async(req, res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.post('/unidades/edit/:id', async(req, res) =>{
    const {id} = req.params;
    await Task.updateOne({_id: id}, req.body);
    res.redirect('/unidades');
});

router.get('/unidades/edit/:id', async(req, res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('unidades', {
        task
    });
});

router.get('/unidades/delete/:id', async(req, res) =>{
    const {id} = req.params;
    await Colab.remove({_id: id});
    res.redirect('/unidades');
});


module.exports = router;