import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import About from './pages/About';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Yoga from './pages/Yoga';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route exact path='/' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/> 
    <Route path='/workout' element={<Exercises/>}/> 
    <Route path='/yoga' element={<Yoga/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
