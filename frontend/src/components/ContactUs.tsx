import { FC } from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo: FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
    <div className="bg-blue-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const ContactUs: FC = () => {
  return (
    <section className="w-5/6 mx-auto py-8 bg-gray-100 flex justify-center">
      <div className="bg-white w-2/3 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-12">
            <ContactInfo 
              icon={<Phone className="w-6 h-6 text-blue-500" />}
              title="Phone"
              content="+1 234 567 890"
            />
            <ContactInfo 
              icon={<Mail className="w-6 h-6 text-blue-500" />}
              title="Email"
              content="info@carconnect.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;