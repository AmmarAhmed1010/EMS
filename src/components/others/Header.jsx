import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left Section: User Greeting */}
      <div className="text-white font-bold text-xl md:text-3xl text-center md:text-left">
        <h1>Hello,</h1>
        <h1>Ammar</h1>
      </div>

      {/* Right Section: Log Out Button */}
      <div className="mt-4 md:mt-0">
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
