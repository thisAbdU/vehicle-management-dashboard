import { FC, useState } from 'react'
import { Search, DollarSign, Calendar, Settings } from 'lucide-react'

interface FilterBoxProps {
    icon: React.ReactNode;
    title: string;
  }
  
  const FilterBox: React.FC<FilterBoxProps> = ({ icon, title }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div
        className={`p-8 border rounded-lg cursor-pointer transition-colors duration-300 ${
          isActive ? 'bg-blue-400 text-black' : 'bg-white text-gray-800'
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
      </div>
    );
  }

interface CarCardProps {
    name: string
    price: string
    year: string
    mileage: string
    image: string
}

const CarCard: FC<CarCardProps> = ({ name, price, year, mileage, image}) => (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600">{year}</p>
          <p className="text-gray-600">{mileage}</p>
        </div>
        <p className="text-lg font-semibold text-blue-500">{price}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent hover:border-blue-500 transition-all duration-300 rounded-lg"></div>
    </div>
)

const Listing: FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Your Perfect Car</h2>
        
        {/* Filter Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <FilterBox icon={<Search className="w-6 h-6 text-blue-500" />} title="Car Model" />
          <FilterBox icon={<DollarSign className="w-6 h-6 text-blue-500" />} title="Price Range" />
          <FilterBox icon={<Calendar className="w-6 h-6 text-blue-500" />} title="Year" />
          <FilterBox icon={<Settings className="w-6 h-6 text-blue-500" />} title="Car Type" />
        </div>
        
        {/* Car Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarCard name="Tesla Model 3" price="$41,190" year="2023" mileage="0 miles" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_PI68K_yGzojkTy6wCjsB1HzN6Z6uROSfg&s" />
          <CarCard name="Toyota Camry" price="$26,320" year="2023" mileage="0 miles" image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/front-left-side-47.jpg?imwidth=420&impolicy=resize" />
          <CarCard name="Honda Civic" price="$22,550" year="2023" mileage="0 miles" image="https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D" />
          <CarCard name="Ford Mustang" price="$27,470" year="2023" mileage="0 miles" image="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww" />
          <CarCard name="BMW 3 Series" price="$41,450" year="2023" mileage="0 miles" image="https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qk1XfGVufDB8fDB8fHww" />
          <CarCard name="Audi A4" price="$39,900" year="2023" mileage="0 miles" image="https://images.unsplash.com/photo-1618849985511-7dbc48d7d2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEF1ZGl8ZW58MHx8MHx8fDA%3D" />
        </div>
      </div>
    </section>
  )
}

export default Listing

