const carRepository = require('../repositories/carRepository');

class CarService {
  async addCar(carData) {
    return await carRepository.create(carData);
  }

  async updateCar(id, carData) {
    const updatedCar = await carRepository.update(id, carData);
    if (!updatedCar) throw new Error('Car not found');
    return updatedCar;
  }

  async deleteCar(id) {
    const deletedCar = await carRepository.delete(id);
    if (!deletedCar) throw new Error('Car not found');
    return deletedCar;
  }

  async getCarById(id) {
    const car = await carRepository.findById(id);
    if (!car) throw new Error('Car not found');
    return car;
  }

  async getAllCars() {
    return await carRepository.findAll();
  }
}

module.exports = new CarService();