//import logo from './logo.svg';
//import './App.css';
import Profile from './Profile';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Info from './Info';

function Home() {
    return (
        <div className="App">
    
          <header className="App-header">
           
          </header>
          <Profile/>
        </div>
      );
}

export default Home;
