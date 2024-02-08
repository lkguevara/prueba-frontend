import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Article from './Pages/Article';
import Posgrados from './Pages/Posgrados';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/posgrados" element={<Posgrados />} />
    </Routes>
  )
}

export default App
