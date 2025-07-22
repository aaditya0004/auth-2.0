import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
// import DashboardPage from "./pages/DashboardPage";
import { getToken, setToken, removeToken } from "./utils/tokenManager";
import { fetchUserProfile } from "./services/authService";
import HomePage from "./pages/HomePage";
import HrDashboardPage from "./pages/HrDashboardPage";
import SetPasswordPage from "./pages/SetPasswordPage";

const App = () => {
  const [token, setTokenState] = useState(getToken());
  const [page, setPage] = useState(token ? "dashboard" : "landing");
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const pathname = window.location.pathname;

    // Detect if we are on the set-password route from Google OAuth
    if (pathname === "/set-password" && tokenFromUrl) {
      setPage("set-password");
      setToken(tokenFromUrl);
      setTokenState(tokenFromUrl);
      return;
    }

    // token flow
    if (tokenFromUrl) {
      handleAuthSuccess(tokenFromUrl, true);
      window.history.replaceState({}, document.title, "/");
      return;
    }

    const cachedToken = getToken();
    if (cachedToken) {
      handleAuthSuccess(cachedToken, false);
    }
  }, []);

  const handleAuthSuccess = async (token, redirectMode = false) => {
    setToken(token); // Store in localStorage
    setTokenState(token);

    try {
      const res = await fetchUserProfile();
      const role = res.data.data.role;

      if (userType && userType !== role) {
        alert(`You are not authorized to login from the ${userType} portal.`);
        removeToken();
        setTokenState(null);
        setPage("landing");
        return;
      }

      if (role === "admin") {
        setPage("hr-dashboard");
      } else {
        setPage("home");
      }
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      removeToken();
      setTokenState(null);
      setPage("landing");
    }
  };

  const handleLogout = () => {
    removeToken();
    setTokenState(null);
    setPage("landing");
    setUserType(null);
    window.history.replaceState({}, document.title, "/"); // Removes ?token from URL
  };

  const renderPage = () => {
    switch (page) {
      case "auth":
        return (
          <AuthPage
            onAuthSuccess={handleAuthSuccess}
            userType={userType}
            onBack={() => setPage("landing")}
          />
        );
      case "home":
        return <HomePage onLogout={handleLogout} />;
      case "hr-dashboard":
        return <HrDashboardPage onLogout={handleLogout} />;
      case "set-password":
        return <SetPasswordPage onSuccess={handleAuthSuccess} />;
      default:
        return <LandingPage onNavigate={setUserTypeThenNavigate} />;
    }
  };

  const setUserTypeThenNavigate = (type) => {
    setUserType(type);
    setPage("auth");
  };

  return <Layout>{renderPage()}</Layout>;
};

export default App;
