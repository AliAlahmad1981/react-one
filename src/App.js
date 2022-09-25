import { Routes,Route } from 'react-router-dom';
import './App.scss';
import About from './componnets/About';
import Home from './componnets/Home';
import Navbar from './componnets/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
