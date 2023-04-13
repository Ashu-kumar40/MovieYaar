import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<h1>This is movie details</h1>} />
          <Route path="movie/:type" element={<h1>This is movie type</h1>} />
          <Route path="/*" element={<h1>Error: page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
