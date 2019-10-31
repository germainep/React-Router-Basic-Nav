/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path exact="/" />
    <Route path exact="/about" />
    <Route path exact="/contact" />
  </div>
);

export default App;
