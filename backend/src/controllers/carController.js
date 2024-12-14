const carService = require('../services/carService');

class CarController {
  async addCar(req, res) {
    try {
      const car = await carService.addCar(req.body);
      res.status(201).json(car);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateCar(req, res) {
    try {
      const updatedCar = await carService.updateCar(req.params.id, req.body);
      res.json(updatedCar);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteCar(req, res) {
    try {
      await carService.deleteCar(req.params.id);
      res.json({ message: 'Car deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getCar(req, res) {
    try {
      const car = await carService.getCarById(req.params.id);
      res.json(car);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getAllCars(req, res) {
    try {
      const cars = await carService.getAllCars();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CarController();