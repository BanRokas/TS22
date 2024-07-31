import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HousePlantsProvider } from './contexts/HousePlantsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HousePlantsProvider>
    <App />
  </HousePlantsProvider>
);
