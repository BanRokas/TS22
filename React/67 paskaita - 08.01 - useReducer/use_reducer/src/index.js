import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HousePlantsProvider } from './contexts/HousePlantsContext';
import { PageLoaderProvider } from './contexts/PageLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageLoaderProvider>
    <HousePlantsProvider>
      <App />
    </HousePlantsProvider>
  </PageLoaderProvider>
);
