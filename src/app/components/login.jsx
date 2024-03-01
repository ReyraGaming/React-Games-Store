"use client";

import { useState } from "react";
const ModalLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <button
        className="bg-[#979fbd] px-4 py-1 rounded-lg hover:bg-[#54abf7]"
        onClick={() => setIsOpen(true)}
      >
        Sign In
      </button>
      {isOpen && (
        <div className="bg-[#0c0b0bb4] fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-[#334bd4] rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl text-center font-overpass mb-[40px]">Sign In Your Account</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded mb-[20px] px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded mb-[20px] px-3 py-2"
            />
            <button
              className="bg-[#979fbd] hover:bg-[#54abf7] text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-[#979fbd] hover:bg-[#54abf7] text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogin
