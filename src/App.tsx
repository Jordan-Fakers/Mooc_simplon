import React from 'react';
import Header from './component/header/header';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
      <BrowserRouter>
      <Link to="/"> </Link>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
