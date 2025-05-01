import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Categories = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const categories = [
    { name: "Action Figures", image: "https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Superhero and cartoon character action figures" },
    { name: "Building Blocks", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Creative building blocks and sets" },
    { name: "Dolls", image: "https://images.unsplash.com/photo-1558507334-8f862eeac7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Fashion dolls and accessories" },
    { name: "Puzzles", image: "https://images.unsplash.com/photo-1606503131606-50c88fa79294?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Brain-teasing puzzles for all ages" },
    { name: "Educational Toys", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Learning toys that make education fun" },
    { name: "Outdoor Toys", image: "https://images.unsplash.com/photo-1559762705-2123aa9b467f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Toys for outdoor adventures" }
  ];

  const fallbackImageUrl = "https://images.unsplash.com/photo-1607583449927-da0f77586365?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImageUrl;
  };
  
  const showNotification = (message: string) => {
    const toast = document.createElement('div');
    toast.className = 'position-fixed top-0 end-0 p-3';
    toast.style.zIndex = '1050';
    toast.innerHTML = `
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Notification</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${message}
        </div>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  return (
    <div className="min-h-screen d-flex flex-column">
      <Navbar />
      
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold">Toy Categories</h1>
            <p className="lead text-muted">Discover the perfect toy for every child!</p>
          </div>
        </div>
        
        <div className="row g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <img 
                  src={category.image} 
                  className="card-img-top" 
                  alt={category.name} 
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={handleImageError}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                  <a href="#" 
                    className="btn btn-primary rounded-pill px-4" 
                    onClick={(e) => {
                      e.preventDefault();
                      showNotification(`Exploring ${category.name}`);
                    }}>
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Categories;
