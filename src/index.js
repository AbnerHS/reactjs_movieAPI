import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Menu } from './components/Menu';
import { MoviesContextProvider } from './contexts/MoviesProvider';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { Home } from './templates/Home';
import { View } from './templates/View';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesContextProvider>
                <Home />
                <GlobalStyles />
              </MoviesContextProvider>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <MoviesContextProvider>
                <View />
                <GlobalStyles />
              </MoviesContextProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
