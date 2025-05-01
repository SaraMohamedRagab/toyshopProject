import React from 'react';
import { cn } from '@/lib/utils';

type CategoryProps = {
  title: string;
  image: string;
  color: string;
  description: string;
};

const CategoryCard = ({ title, image, color, description }: CategoryProps) => {
  return (
    <div className={cn(
      "category-card group",
      {
        'bg-toy-red/10': color === 'red',
        'bg-toy-blue/10': color === 'blue',
        'bg-toy-green/10': color === 'green',
        'bg-toy-yellow/10': color === 'yellow',
        'bg-toy-pink/10': color === 'pink',
        'bg-toy-purple/10': color === 'purple',
      }
    )}>
      <div className="h-40 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className={cn(
          "text-xl font-bold mb-2 transition-colors",
          {
            'text-toy-red': color === 'red',
            'text-toy-blue': color === 'blue',
            'text-toy-green': color === 'green',
            'text-toy-yellow': color === 'yellow',
            'text-toy-pink': color === 'pink',
            'text-toy-purple': color === 'purple',
          }
        )}>{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = [
    {
      title: "Action Figures",
      image: "1485827404703-89b55fcc595e",
      color: "red",
      description: "Superheroes, characters, and collectibles"
    },
    {
      title: "Building Blocks",
      image: "1488590528505-98d2b5aba04b",
      color: "blue",
      description: "Construction and creative building toys"
    },
    {
      title: "Dolls & Plushies",
      image: "1535268647677-300dbf3d78d1",
      color: "pink",
      description: "Cuddly friends and fashion dolls"
    },
    {
      title: "Educational",
      image: "1582562124811-c09040d0a901",
      color: "green",
      description: "Learning toys and brain games"
    },
    {
      title: "Outdoor Play",
      image: "1472396961693-142e6e269027",
      color: "yellow",
      description: "Sports, playground, and outdoor fun"
    },
    {
      title: "Board Games",
      image: "1588492069123-4c9e1dd4bb3e",
      color: "purple",
      description: "Family games and puzzles"
    }
  ];

  return (
    <section className="py-16 confetti-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect toy for every child's interest and age group in our carefully curated categories.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
