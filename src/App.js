import React from "react";

const App = () => {
  return (
    <div className="bg-[#00523F] h-screen z-[1]">
      <img
        src="/Ellipse 3.svg"
        alt="Decoration"
        className="absolute z-[2] right-0 h-screen"
      />
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-[0_0_10px_rgba(255,255,255,0.3)] px-8 py-16 flex flex-col gap-10 z-10 w-[600px]">
          <h1 className="uppercase text-8xl text-[#FFFFFFCC] font-bold">
            Login
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="placeholder-white text-white py-3 px-4 text-2xl border-[3px] border-[#FFFFFF80] bg-transparent rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="placeholder-white text-white py-3 px-4 text-2xl border-[3px] border-[#FFFFFF80] bg-transparent rounded-lg"
          />
          <button className="uppercase text-2xl bg-[#ffffffbe] py-4 px-3 rounded-lg font-semibold hover:bg-[#fffffff1] duration-300">
            Login
          </button>
        </div>
        <img
          src="/undraw_jogging_re_k28i 1.svg"
          alt="Jogging doofus"
          className="z-10"
        />
      </div>
    </div>
  );
};

export default App;
