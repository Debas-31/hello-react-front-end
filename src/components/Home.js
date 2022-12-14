import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center mt-12">
    <p className="font-bold">Welcome To Hello Rails React App</p>
    <NavLink to="/greeting" className="bg-sky-500 p-2 rounded text-slate-50 mt-4">Go to Greeting</NavLink>
  </div>
);

export default Home;
