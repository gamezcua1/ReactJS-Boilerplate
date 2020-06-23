import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';
import baseTheme from './config/themes/base'

import './styles/App.scss';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
