import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/gobal';

import Routes from './routes';

import AppProvider from './hooks';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
