const HomePage = ({ onLogout }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a]">
      <h1 className="text-center text-white text-3xl font-bold mb-4">
        🔐 Home Page (User Portal)
      </h1>
      <button
        onClick={onLogout}
        className="mt-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default HomePage;
