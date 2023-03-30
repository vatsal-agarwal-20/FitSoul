import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route exact path='/' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
