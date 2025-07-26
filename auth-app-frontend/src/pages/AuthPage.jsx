import React from "react";
import AuthForm from "../components/AuthForm";
import LOGO from "../utils/oauth.jpg";
import { FiArrowLeft } from "react-icons/fi";

const AuthPage = ({ onAuthSuccess, userType, onBack }) => (
  <div className="w-full max-w-md mx-auto animate-fade-in">
    {/* Back Button */}
    <button
  onClick={onBack}
  className="absolute top-4 left-4 flex items-center gap-2 text-white-400 hover:text-yellow-300 transition px-3 py-1.5 text-sm font-medium bg-[#1c1c1c] border border-whitw-400 rounded-full shadow-sm hover:shadow-md"
>
  <FiArrowLeft className="text-lg" />
  <span>Back</span>
</button>
    <div className="text-center mb-8">
      <img
        src={LOGO}
        alt="oauth 2.0 Logo"
        className="h-16 w-auto mx-auto mb-4"
      />
    </div>
    <div className="bg-[#1c1c1c] border border-gray-800 p-8 rounded-xl shadow-2xl">
      <AuthForm onAuthSuccess={onAuthSuccess} userType={userType} />
    </div>
  </div>
);

export default AuthPage;
