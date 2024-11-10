import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkEmailExists = async (email) => {
    if (!email) return false;
    
    try {
      const subscribersRef = collection(db, 'subscribers');
      const q = query(
        subscribersRef,
        where('email', '==', email.toLowerCase())
      );
      
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking email:', error);
      return null;
    }
  };

  const addSubscriber = async (subscriberData) => {
    try {
      const subscribersRef = collection(db, 'subscribers');
      const docRef = await addDoc(subscribersRef, subscriberData);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return { success: false, error };
    }
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate email
      if (!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Check if email exists
      const emailExists = await checkEmailExists(email);
      
      if (emailExists === null) {
        setError('Unable to process your request. Please try again later.');
        return;
      }
      if (emailExists === true) {
        setError('This email is already subscribed to our newsletter');
        return;
      }

      // Prepare subscriber data
      const subscriberData = {
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(),
        status: 'active'
      };

      // Add subscriber
      const result = await addSubscriber(subscriberData);
      
      if (!result.success) {
        setError('Unable to complete subscription. Please try again later.');
        return;
      }

        // Show success message
        setShowSuccess(true);
        setEmail('');

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);

        } catch (error) {
        console.error('Subscription error:', error);
        setError('Unable to complete subscription. Please try again later.');
        } finally {
        setIsLoading(false);
        }
        };

  return (
    <div className="text-center ">
     <div className="flex flex-col items-center justify-center">
    <div>
      <h4 className="h6 text-white text-4xl font-bold mb-0" style={{
        marginBottom: "0"
      }}> Subscribe to our newsletter </h4>
      <p className="mb-6"> Enter your email address to subscribe </p>
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
            className="w-full sm:w-auto h-[5rem] px-8 bg-[#21070a] text-white font-semibold rounded hover:bg-black transition-colors outline-none border-none disabled:opacity-50"
            disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
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
         Thank you for subscribing to our newsletter!
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;