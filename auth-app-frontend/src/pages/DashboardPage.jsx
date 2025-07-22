/* import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../services/authService';
import LOGO from '../utils/noir.jpg'

const InfoRow = ({ label, value, isCapitalized }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700/50 py-3">
    <span className="font-semibold text-gray-400 text-sm">{label}:</span>
    <span className={`text-white font-mono text-base ${isCapitalized ? 'capitalize' : ''}`}>{value}</span>
  </div>
);

const DashboardPage = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetchUserProfile();
        setUser(res.data.data);
      } catch {
        setError('Your session may have expired. Please log in again.');
      }
    };

    getUser();
  }, []);

  if (error) {
    return (
      <div className="text-center text-white bg-[#1c1c1c] border border-red-700/50 p-8 rounded-xl">
        <p className="text-red-400">{error}</p>
        <button onClick={onLogout} className="mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg">
          Sign In
        </button>
      </div>
    );
  }

  if (!user) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="text-center bg-[#1c1c1c] border border-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-auto">
      <img src={LOGO} alt="Noir Capital Logo" className="h-12 w-auto mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-white mb-2">User Portal</h2>
      <p className="text-gray-400 text-lg mb-8">Welcome, <span className="text-yellow-400 font-bold">{user.name}</span></p>

      <div className="text-left bg-black/30 border border-gray-700 p-6 rounded-lg space-y-2">
        <InfoRow label="Email Address" value={user.email} />
        <InfoRow label="User Since" value={new Date(user.createdAt).toLocaleDateString()} />
        <InfoRow label="Account Type" value={user.role} isCapitalized />
        <InfoRow label="Phone Number" value={user.phoneNumber || 'Not Provided'} />
      </div>

      <button onClick={onLogout} className="mt-8 w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition">
        Sign Out
      </button>
    </div>
  );
};

export default DashboardPage;
 */