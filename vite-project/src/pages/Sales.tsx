import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sale = () => {
  const [, setIsMobile] = useState(false);
  
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

  const saleItems = [
    { name: "Teddy Bear", originalPrice: "$24.99", salePrice: "$14.99", image: "https://images.unsplash.com/photo-1607583449927-da0f77586365?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "40%" },
    { name: "Building Blocks Set", originalPrice: "$39.99", salePrice: "$24.99", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "38%" },
    { name: "Super Hero Figure", originalPrice: "$19.99", salePrice: "$12.99", image: "https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "35%" },
    { name: "Art and Craft Kit", originalPrice: "$29.99", salePrice: "$18.99", image: "https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "37%" },
    { name: "Musical Keyboard", originalPrice: "$49.99", salePrice: "$29.99", image: "https://images.unsplash.com/photo-1545293527-e26058c5b48b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "40%" },
    { name: "Remote Control Drone", originalPrice: "$89.99", salePrice: "$59.99", image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", discount: "33%" }
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container py-5">
        <div className="bg-danger text-white p-4 rounded-3 mb-5 text-center">
          <h1 className="display-4">Special Sale!</h1>
          <p className="lead mb-0">Limited time offers on selected toys. Don't miss out!</p>
        </div>
        
        <div className="row g-4">
          {saleItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-danger position-relative">
                <div className="position-absolute top-0 start-0 bg-danger text-white py-2 px-3 m-2 rounded-end">
                  <strong>SAVE {item.discount}</strong>
                </div>
                <img 
                  src={item.image} 
                  className="card-img-top" 
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={handleImageError}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <span className="text-decoration-line-through text-muted me-2">{item.originalPrice}</span>
                    <span className="text-danger fw-bold">{item.salePrice}</span>
                  </p>
                  <div className="d-grid">
                    <button 
                      className="btn btn-danger"
                      onClick={() => showNotification(`${item.name} added to cart!`)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sale;
