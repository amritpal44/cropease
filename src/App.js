import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import FuturePrediction from './pages/FuturePrediction';
import CurrentPrediction from './pages/CurrentPrediction';
import SupervisedOutput from './pages/SupervisedOutput';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="h-screen relative">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />

        <Route path='/future-prediction' element = {<FuturePrediction/>} />

        <Route path='/current-prediction' element = {<CurrentPrediction/> } />

        <Route path='/current-output' element = {<SupervisedOutput/>} />
      </Routes> 
    </div>
  );
}

export default App;