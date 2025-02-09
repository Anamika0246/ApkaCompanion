import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video 
        src="/videobg3.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      
      <nav className="absolute top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md flex justify-between items-center p-4">
        <div className="dropdown">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><a>Profile</a></li>
            <li><a>Consultation</a></li>
            <li><a>Pathology</a></li>
            <li><a>Medicines</a></li>
          </ul>
        </div>
        
        <a className="text-xl font-semibold">ApkaCompanion</a>
        
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> 
            </svg>
            <span className="badge badge-xs badge-primary absolute top-0 right-0"></span>
          </button>
        </div>
      </nav>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-sky-600">Apka Companion</span>
        </h1>
        <h3 className="text-lg md:text-2xl mt-2 font-semibold">One App, Total Care!</h3>
      </div>
    </div>
  );
};

export default Home;
