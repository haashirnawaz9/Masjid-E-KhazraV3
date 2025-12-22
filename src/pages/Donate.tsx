import React from 'react';
import { Heart } from 'lucide-react';

const Donate = () => {
  const zellePayment = () => {
    window.location.href = 'https://www.zellepay.com';
  };

  const stripePayment = () => {
    //window.location.href = 'https://buy.stripe.com/test_3cs8xwdI18b04Fy3cc';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Mosque</h1>
            <p className="text-xl text-gray-600">
              Your generous donations help us maintain our services and support our community
            </p>
            <p className="p-3 text-red-900 mt-4">
              Unfortunately stripe payments is not working right now. If possible, please donate using Zelle. 
              Our Zelle is <span className="font-bold">masjidkhazrany@gmail.com</span>
            </p>
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={zellePayment} 
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Donate Using Zelle
              </button>
              
              <div className="pt-4">
                <button 
                  onClick={stripePayment} 
                  className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Donate with Card
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Why Your Support Matters</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Your donations help us maintain the mosque, support educational programs, and serve our community in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mosque maintenance and utilities</li>
                <li>Islamic education programs</li>
                <li>Community events and gatherings</li>
                <li>Helping those in need in our community</li>
                <li>Special programs during Ramadan and Eid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
