import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Splash from './components/Splash';


function App() {
  return (
    <React.Fragment>      
      <AppRouter />
    </React.Fragment>
  );
}

export default Splash(App);
