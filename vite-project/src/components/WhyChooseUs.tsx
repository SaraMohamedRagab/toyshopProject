import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 rounded-full bg-toy-red/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bubblegum text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-toy-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Toy Palace?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing the best toys and shopping experience for you and your children.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
            title="Safety First"
            description="All our toys meet or exceed safety standards. We carefully select products that are safe for your little ones."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            title="Fast Delivery"
            description="Quick shipping to get toys into little hands faster. Most orders ship within 24 hours."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            title="Happy Returns"
            description="Hassle-free 30-day return policy. If you're not satisfied, we'll make it right."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>}
            title="Educational Value"
            description="We focus on toys that help children learn and develop important skills while having fun."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>}
            title="Price Match"
            description="Found a lower price? We'll match it! We want to offer the best value for our customers."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toy-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>}
            title="Expert Support"
            description="Our toy specialists can help you find the perfect toy for any age, interest, or occasion."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;