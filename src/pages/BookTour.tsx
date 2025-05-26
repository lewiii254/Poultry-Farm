import React, { useState } from 'react';
import { Calendar, Clock, Users, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const BookTour: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00',
    groupSize: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Tour booking request sent! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '10:00',
      groupSize: '1',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Farm Tour</h1>
            <p className="text-lg text-gray-600">
              Experience our modern poultry farming practices firsthand. Book a tour to learn about our operations
              and get expert insights into poultry farming.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tour Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Information</h2>
            
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Guided tour of our modern poultry facilities
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Learn about different breeds and their care
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Understanding of feeding and health management
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Q&A session with our poultry experts
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Available Days</h3>
                  <p className="text-gray-600">Monday to Saturday</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Tour Times</h3>
                  <p className="text-gray-600">10:00 AM, 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Group Size</h3>
                  <p className="text-gray-600">Maximum 10 people per group</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Tour</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Visitors *
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center"
                  >
                    Book Tour <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;