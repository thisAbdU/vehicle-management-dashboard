'use client'

import { FC, useState } from 'react'
import { PlusCircle } from 'lucide-react'

const AddCarBox: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div 
        className="bg-blue-500 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300 w-3/5 mx-auto h-48 flex flex-col justify-center items-center"
        onClick={openModal}
      >
        <div className="flex items-center justify-center space-x-4">
          <PlusCircle className="w-8 h-8" />
          <span className="text-xl font-semibold">Add Your Car</span>
        </div>
        <p className="mt-2 text-center">Click here to list your vehicle</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Add Your Car</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Car Model</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700">Price</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700">Year</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700">Mileage</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700">Last Updated</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
                <label className="block text-gray-700">Status</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddCarBox