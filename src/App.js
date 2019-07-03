import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppFooter from "./components/Footer/Footer"
import AppHeader from "./components/Header/Header"
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Calendar />
      <AppFooter />
    </div>
  );
}

export default App;
