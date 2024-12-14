const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/', carController.addCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);
router.get('/:id', carController.getCar);
router.get('/', carController.getAllCars);

module.exports = router;