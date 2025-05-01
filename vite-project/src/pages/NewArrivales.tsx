import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NewArrivals = () => {
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

  const newArrivals = [
    { name: "Space Explorer Robot", price: "$29.99", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" },
    { name: "Unicorn Plush Toy", price: "$19.99", image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" },
    { name: "Wooden Activity Cube", price: "$34.99", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" },
    { name: "Musical Piano Mat", price: "$39.99", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" },
    { name: "Remote Control Car", price: "$24.99", image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" },
    { name: "Dinosaur Model Set", price: "$15.99", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", tag: "New" }
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
            <h1 className="display-4 fw-bold">New Arrivals</h1>
            <p className="lead text-muted">Check out our latest toys and products!</p>
          </div>
        </div>
        
        <div className="row g-4">
          {newArrivals.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm rounded-3 position-relative overflow-hidden">
                <span className="position-absolute top-0 end-0 badge bg-danger m-2 rounded-pill px-3 py-2">
                  {product.tag}
                </span>
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={handleImageError}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-primary fw-bold">{product.price}</p>
                  <button 
                    className="btn btn-outline-primary mt-auto rounded-pill px-4"
                    onClick={() => showNotification(`${product.name} added to cart!`)}
                  >
                    Add to Cart
                  </button>
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

export default NewArrivals;