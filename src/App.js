import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Pages/Homepage/Homepage';
import MovieList from './Components/MovieLists/MovieList';
import MovieDetails from './Components/Pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="movie/:type" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDetails /> } />
          <Route path="/*" element={<h1>Error: page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
