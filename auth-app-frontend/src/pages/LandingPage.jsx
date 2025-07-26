import React from 'react';
import LOGO from '../utils/oauth.jpg'

const LandingPage = ({ onNavigate }) => (
  <div className="text-center flex flex-col items-center p-4 animate-fade-in">
    <img src={LOGO} alt="oauth 2.0 Logo" className="h-24 w-auto mb-6" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Auth 2.0</h1>
    <p className="text-lg text-gray-400 mb-10 max-w-2xl">Welcome to the Auth 2.0 secure portal. Please select your access point.</p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xs sm:max-w-md">
      <button onClick={() => onNavigate('user')} className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-10 rounded-lg">
        User Portal
      </button>
      <button onClick={() => onNavigate('admin')} className="w-full sm:w-auto bg-transparent border-2 border-gray-600 text-gray-400 font-bold py-3 px-10 rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-500">
        Admin Portal
      </button>
    </div>
  </div>
);

export default LandingPage;
