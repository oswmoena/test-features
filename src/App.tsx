import React from 'react';
import './scss/styles.scss';
import { Home } from './screens/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <Home />
  );
}

export default App;
