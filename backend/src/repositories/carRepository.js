const Car = require('../models/Car');

class CarRepository {
  async create(carData) {
    const car = new Car(carData);
    return await car.save();
  }

  async update(id, carData) {
    return await Car.findByIdAndUpdate(id, carData, { new: true });
  }

  async delete(id) {
    return await Car.findByIdAndDelete(id);
  }

  async findById(id) {
    return await Car.findById(id);
  }

  async findAll() {
    return await Car.find();
  }
}

module.exports = new CarRepository();