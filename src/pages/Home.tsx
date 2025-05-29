import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        {/* Background container with RELATIVE positioning instead of fixed */}
        <div className="relative h-[670px] overflow-hidden">
          {/* Background div with relative positioning */}
          <div 
            className="absolute inset-0 w-full h-full" 
            style={{
              background: 'url("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1920") no-repeat center center',
              backgroundSize: 'cover',
              position: 'fixed', // Changed from fixed to absolute
              zIndex: '-1'
            }}
          ></div>

          {/* Overlay and content */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center" style={{ zIndex: '1' }}>
            <motion.div 
              className="text-center text-white px-4"
              {...fadeIn}
            >
              <div className="mb-4 md:text-xl">
                <h1 className="">Assalaam Alaikum wa Rahmatullahu wa Barakatu</h1>
                <h1>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
              </div>

              <h1 className="text-xl md:text-2xl font-bold mb-1">Welcome to the officlal Website of</h1>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Masjid-e-Khazra</h1>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Serving the Muslim Community in East Elmhurst, New York</p>
              <Link 
                to="/donate" 
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Support Our Mosque
                <ChevronRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Clock className="w-14 h-14 mx-auto mb-6 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prayer Times</h3>
                <p className="text-gray-600 mb-6">Stay updated with our daily prayer schedule and join our congregation</p>
                <Link 
                  to="/prayer-times" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  View Schedule <ChevronRight className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="w-14 h-14 mx-auto mb-6 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Community</h3>
                <p className="text-gray-600 mb-6">Discover our vibrant community and the various programs we offer</p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Learn More <ChevronRight className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-14 h-14 mx-auto mb-6 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Support Us</h3>
                <p className="text-gray-600 mb-6">Your generous contributions help us serve our community better</p>
                <Link 
                  to="/donate" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Donate Now <ChevronRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-16 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
              <p className="text-lg mb-8 text-emerald-100">
                Be part of our growing community and participate in our regular events, 
                educational programs, and spiritual gatherings.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
                <ChevronRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

export default Home;