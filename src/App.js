import { Routes,Route } from 'react-router-dom';
import './App.scss';
import About from './componnets/about/About';
import Home from './componnets/Home';
import Navbar from './componnets/Navbar';
import Users from './componnets/Users';
import "./componnets/sass/main.scss";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='user' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
