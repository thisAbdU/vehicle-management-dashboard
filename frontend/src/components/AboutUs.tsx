import { FC } from 'react';
import { Users, Car, DollarSign, Shield } from 'lucide-react';

const FeatureCard: FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUs: FC = () => {
  return (
    <section className="py-16 bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>About CarConnect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
            CarConnect is your trusted platform for buying and selling quality vehicles. 
            We're passionate about connecting car enthusiasts and making the car ownership 
            experience seamless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-blue-500" />}
            title="Community Driven"
            description="Join a community of car enthusiasts who share your passion for vehicles."
          />
          <FeatureCard 
            icon={<Car className="w-8 h-8 text-blue-500" />}
            title="Wide Selection"
            description="Explore a wide range of vehicles to find the perfect one for you."
          />
          <FeatureCard 
            icon={<DollarSign className="w-8 h-8 text-blue-500" />}
            title="Affordable Prices"
            description="Get the best deals on quality vehicles that fit your budget."
          />
          <FeatureCard 
            icon={<Shield className="w-8 h-8 text-blue-500" />}
            title="Trusted Platform"
            description="Buy and sell with confidence on our secure and reliable platform."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;