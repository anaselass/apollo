import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import AssetDetail from './pages/AssetDetail';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="assets/:id?" element={<AssetDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
