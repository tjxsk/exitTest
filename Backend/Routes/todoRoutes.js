const express = require('express');
const todoModel = require('../Models/todoModel');
const router = new express.Router();

router.use(express.json());


// get operation
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await todoModel.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('DATA NOT FOUND');
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await todoModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('DATA NOT FOUND');
    }
});

//post operation
router.post('/add', async (req, res) => {
    try {
        const data = await todoModel.create(req.body);
        res.status(201).send('Successfully posted');
    } catch (error) {
        res.status(400).send('Post unsuccessfull');
        console.log(error);
    }
});

//delete operation 
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await todoModel.findByIdAndDelete(id, req.body);
        res.status(200).send('Deletion Successfull');
    } catch (error) {
        res.status(400).send('Deletion Unsuccessfull');
        console.log(error)
    }
});

module.exports = router;