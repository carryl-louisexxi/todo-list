import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './webpages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
