import React from 'react';

type ToyProps = {
  name: string;
  image: string;
  price: string;
  category: string;
  ageRange: string;
};

const ToyCard = ({ name, image, price, category, ageRange }: ToyProps) => {
  return (
    <div className="toy-card group">
      <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-toy-blue/30 to-toy-pink/30 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img
          src={`https://images.unsplash.com/photo-${image}`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div>
        <span className="inline-block px-3 py-1 bg-toy-yellow/20 text-toy-yellow rounded-full text-xs font-bold mb-2">
          {category}
        </span>
        <h3 className="font-bold text-lg mb-1 group-hover:text-toy-blue transition-colors">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">Age: {ageRange}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-toy-green">{price}</span>
          <button className="p-2 rounded-full bg-toy-blue/10 text-toy-blue hover:bg-toy-blue hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const featuredToys = [
    {
      name: "Robot Explorer",
      image: "1485827404703-89b55fcc595e",
      price: "$24.99",
      category: "Educational",
      ageRange: "6-12 yrs"
    },
    {
      name: "Plush Kitten",
      image: "1535268647677-300dbf3d78d1",
      price: "$19.99",
      category: "Plushies",
      ageRange: "3+ yrs"
    },
    {
      name: "Building Bricks Set",
      image: "1488590528505-98d2b5aba04b",
      price: "$34.99",
      category: "Building Blocks",
      ageRange: "4-10 yrs"
    },
    {
      name: "Space Explorer Kit",
      image: "1582562124811-c09040d0a901",
      price: "$29.99",
      category: "Science Toys",
      ageRange: "8-12 yrs"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Toys</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover this week's most popular toys that kids absolutely love!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredToys.map((toy, index) => (
            <ToyCard key={index} {...toy} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="toy-button bg-toy-green hover:bg-toy-blue">
            View All Toys
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
