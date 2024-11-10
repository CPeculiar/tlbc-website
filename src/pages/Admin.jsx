import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SubscriberAdmin = () => {
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
    // Create CSV content
    const headers = ['Email', 'Subscribed Date', 'Status'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribedAt).toLocaleDateString(),
        sub.status
      ].join(','))
    ].join('\n');

    // Create and trigger download
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

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <p>Loading subscribers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Newsletter Subscribers</h2>
        <div className="flex gap-4">
        <button
          onClick={downloadCSV}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download CSV
        </button>
        <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Out
          </button>
      </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b text-left">Email</th>
              <th className="px-6 py-3 border-b text-left">Subscribed Date</th>
              <th className="px-6 py-3 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td className="px-6 py-4 border-b">{subscriber.email}</td>
                <td className="px-6 py-4 border-b">
                  {new Date(subscriber.subscribedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 border-b">{subscriber.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-gray-600">
        Total Subscribers: {subscribers.length}
      </div>
    </div>
  );
};

export default SubscriberAdmin;