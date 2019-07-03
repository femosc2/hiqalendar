import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppFooter from "./components/Footer/Footer"
import AppHeader from "./components/Header/Header"
import CalendarList from './components/Calendar/CalendarList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <CalendarList />
      <AppFooter />
    </div>
  );
}

export default App;
