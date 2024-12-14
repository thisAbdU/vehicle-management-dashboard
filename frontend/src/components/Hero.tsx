'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

const Hero: FC = () => {
  return (
    <div className="relative bg-[#EEF1FB] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1000px] h-[1px] bg-blue-200"
          initial={{ 
            top: `${Math.random() * 100}%`,
            left: '-100%',
            rotate: `${Math.random() * 30 - 15}deg`
          }}
          animate={{
            left: '200%',
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-20 text-center pt-40">
      <h1 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Find your dream Car</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Discover a wide range of quality vehicles to suit your lifestyle and budget. 
          Your perfect ride is just a click away.
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
          Explore Cars
        </button>
        <div className="mt-8">
          <img src="/img/istockphoto-1150425295-612x612-removebg-preview(1).png" alt="hero" className="mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3 z-20" />
        </div>
      </div>
    </div>
  )
}

export default Hero

