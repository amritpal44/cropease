import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import FuturePrediction from './pages/FuturePrediction';
import CurrentPrediction from './pages/CurrentPrediction';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<HomePage/>} />

        <Route path='/future-prediction' element = {<FuturePrediction/>} />

        <Route path='/current-prediction' element = {<CurrentPrediction/> } />
      </Routes>
    </div>
  );
}

export default App;