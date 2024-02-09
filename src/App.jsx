import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Article from './Pages/Article';
import Posgrados from './Pages/Posgrados';
import { Inscripcion } from './Pages/Inscripcion';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/posgrados" element={<Posgrados />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
    </Routes>
  )
}

export default App
