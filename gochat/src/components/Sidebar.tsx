import React from "react";

export default function Sidebar() {
  return (
    <>
      <div>
        <h1 className="pb-5 font-bold text-3xl pl-10 text-shadow-lg/30 text-shadow-black ">
          GoChat
        </h1>
        <div className="flex flex-col gap-3">
          <button className="cursor-pointer border border-white p-5 w-50 rounded-2xl bg-blue-100 text-black font-bold shadow-indigo-500/50 shadow-lg">
            Home
          </button>
          <button className="cursor-pointer border border-white p-5 w-50 rounded-2xl bg-blue-100 text-black font-bold shadow-indigo-500/50 shadow-lg">
            Global
          </button>
          <button className="cursor-pointer border border-white p-5 w-50 rounded-2xl bg-blue-100 text-black font-bold shadow-indigo-500/50 shadow-lg">
            Voice
          </button>
        </div>
      </div>
    </>
  );
}
