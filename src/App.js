import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route
        path="/"
        element={(
          <Home />
        )}
      />
      <Route
        path="/greeting"
        element={(
          <Greeting />
        )}
      />
    </Routes>
  </>
);

export default App;
