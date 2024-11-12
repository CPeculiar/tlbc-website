import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from "../services/AuthContext";


// Custom Alert Component (reused from contact page)
const Alert = ({ children, type }) => {
  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';

  return (
    <div className={`p-4 mb-4 rounded-lg border ${bgColor} ${textColor} ${borderColor}`}>
      {children}
    </div>
  );
};

const SubscriberAdmin = () => {
  const { login, logout } = useAuth();
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const subscribersRef = collection(db, 'subscribers');
      const snapshot = await getDocs(subscribersRef);
      const subscriberList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSubscribers(subscriberList);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      setError('Unable to fetch subscribers');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ['Email', 'Subscribed Date', 'Status'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribedAt).toLocaleDateString(),
        sub.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear(); // Clear the local storage
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      console.error('Logout error:', error);
      alert("Failed to log out: " + error.message);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3b0d11]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#3b0d11] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Newsletter Management</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && <Alert type="error" className="text-lg">{error}</Alert>}

        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="text-2xl font-semibold text-gray-800">
              Total Subscribers: {subscribers.length}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadCSV}
                className="px-6 py-2 bg-[#3b0d11] text-white rounded-lg hover:bg-[#2a090c] transition-colors duration-200 text-sm font-medium"
              >
                Download CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-600 border-b">Email</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-600 border-b">Subscribed Date</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-600 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber, index) => (
                  <tr 
                    key={subscriber.id}
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-lg text-gray-800 border-b">{subscriber.email}</td>
                    <td className="px-6 py-4 text-lg text-gray-800 border-b">
                      {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-lg border-b">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                        subscriber.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {subscriber.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberAdmin;