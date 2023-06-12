import './App.css'
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import MoviePage from './Pages/MoviePage'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import MoviesPage from './Pages/MoviesPage'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/movies/:type" element={<MoviesPage />} />
          <Route path="/movies/:type/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
