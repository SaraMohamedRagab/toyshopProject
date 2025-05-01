import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-toy-blue/50 to-toy-purple/50">
      {/* Decorative elements */}
      {['red', 'blue', 'green', 'yellow', 'pink'].map((color, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full opacity-70 animate-float",
            i % 2 === 0 ? "w-24 h-24" : "w-32 h-32",
            {
              'bg-toy-red top-10 left-[10%]': color === 'red',
              'bg-toy-blue bottom-10 left-[20%] animation-delay-200': color === 'blue',
              'bg-toy-green top-1/4 right-[15%] animation-delay-300': color === 'green',
              'bg-toy-yellow top-3/4 left-[40%] animation-delay-150': color === 'yellow',
              'bg-toy-pink top-1/3 left-[70%] animation-delay-250': color === 'pink',
            }
          )}
          style={{
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 drop-shadow-lg animate-bounce">
          Explore Our World of Toys!
        </h1>
        <p className="text-xl md:text-2xl text-white text-center mb-8 max-w-2xl drop-shadow-md">
          Discover amazing toys that inspire creativity, learning, and endless fun for kids of all ages!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="toy-button bg-toy-red hover:bg-toy-pink">
            Shop Now
          </button>
          <button className="toy-button bg-toy-blue hover:bg-toy-green">
            Browse Categories
          </button>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;