//import logo from './logo.svg';
import './scss/app.scss';
import Profile from './components/Profile';
import ReactDOM from "react-dom/client";
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Info from './components/Info';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/user/:id" element={<Info/>} />
<Route path="*" element={<NotFoundPage/>} />

</Routes>
</BrowserRouter>




    </div>
  );
}

export default App;
