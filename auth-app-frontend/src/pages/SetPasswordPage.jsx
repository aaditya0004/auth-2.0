import React, { useState, useEffect } from "react";
import { setPassword } from "../services/authService";
import { AiOutlineLock } from "react-icons/ai";
import { getToken } from "../utils/tokenManager";

const SetPasswordPage = ({ onSuccess }) => {
  const [password, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      // Not logged in — redirect to landing or login page
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setError("");

    try {
      await setPassword(password);
      setMsg("✅ Password set successfully! Logging you in...");
      setTimeout(() => {
        onSuccess(localStorage.getItem("token"));
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to set password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-sm bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 shadow-xl text-center">
        {/* Icon and Heading */}
        <div className="mb-6">
          <div className="flex justify-center">
            <AiOutlineLock className="text-yellow-400 text-4xl mb-2" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Set Your Password
          </h2>
          <p className="text-sm text-gray-400">
            To continue using your account
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-xs text-yellow-400 mt-1"
            >
              {showPassword ? "Hide password" : "Show password"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded transition duration-200 disabled:opacity-60"
          >
            {loading ? "Setting..." : "Set Password"}
          </button>
        </form>

        {msg && (
          <p className="mt-4 text-sm text-green-400 text-center font-medium">
            {msg}
          </p>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-400 text-center font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default SetPasswordPage;
