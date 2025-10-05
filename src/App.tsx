import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-amber-50">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;