import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // Here you would make your API call to your backend
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      // For demo purposes, we'll simulate a successful submission
      setShowSuccess(true);
      setEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="text-center  ">
    <div className='flex' style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    <div>
      <h4 className="h6 text-white text-4xl font-bold" style={{
        marginBottom: "0"
      }}>Subscribe to our newsletter</h4>
      <p className="mb-6 ">Enter your email address to subscribe</p>
      </div>

      <div>
      <form onSubmit={handleSubmit} className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           className="w-full sm:w-[38rem] bg-white border-2 border-white rounded text-gray-700 p-4 input-news"
            placeholder="youremail@gmail.com"
            required
            style={{
                backgroundColor: "white", height: "5rem", padding: "1rem" 
            }}
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-[5rem] px-8 bg-[#21070a] text-white font-semibold rounded hover:bg-black transition-colors outline-none border-none"
          >
            Subscribe
          </button>
        </div>
      </form>
      </div>
      </div>

      {error && (
        <div 
          className="p-3 mb-4 text-red-700 bg-red-100 border border-red-200 rounded"
          role="alert"
        >
          {error}
        </div>
      )}

      {showSuccess && (
        <div 
          className="p-3 mb-4 text-green-700 bg-green-100 border border-green-200 rounded"
          role="alert"
        >
          Your email has been received. Thank you for your submission
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;