import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
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
    <Route path='/bicepcurls' element={<Counter exercise="bicepcurls" name={"Bicep Curls"}/>}/>
    <Route path='/squats' element={<Counter exercise="squats" name={"Squats"}/>}/>
    <Route path='/pushups' element={<Counter exercise="pushups" name={"Push Ups"}/>}/>
    <Route path='/crunches' element={<Counter exercise="crunches" name={"Crunches"}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
