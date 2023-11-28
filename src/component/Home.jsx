// components/Home.js
import React from 'react';

const Home = () => {
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
  };

  return (
    <div>
      <h2>Welcome to the Home Menu Bar Page!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
