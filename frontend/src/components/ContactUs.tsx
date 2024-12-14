import { FC } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const ContactInfo: FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
)

const ContactUs: FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ContactInfo 
              icon={<Phone className="w-6 h-6 text-blue-500" />}
              title="Phone"
              content="+1 (555) 123-4567"
            />
            <ContactInfo 
              icon={<Mail className="w-6 h-6 text-blue-500" />}
              title="Email"
              content="info@carconnect.com"
            />
            <ContactInfo 
              icon={<MapPin className="w-6 h-6 text-blue-500" />}
              title="Address"
              content="123 Car Street, Auto City, AC 12345"
            />
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-600">Saturday: 10am - 4pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

