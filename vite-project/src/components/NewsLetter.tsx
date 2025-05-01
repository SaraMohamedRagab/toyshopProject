import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      console.log('Subscribed with:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <h2 className="display-6 mb-4 fw-bold text-primary">Join Our Toy Club!</h2>
            <p className="text-muted mb-4">
              Subscribe to our newsletter for exclusive toy updates, special offers, and birthday surprises for your little ones!
            </p>
            
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mb-3">
                <div className="row g-3">
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Join the Fun!
                    </button>
                  </div>
                </div>
              </form>
            )}
            
            <p className="small text-muted">
              We promise not to spam! You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
