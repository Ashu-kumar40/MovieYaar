import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Pages/Homepage/Homepage';
import MovieList from './Components/MovieLists/MovieList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<h1>This is movie details</h1>} />
          <Route path="movie/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error: page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
