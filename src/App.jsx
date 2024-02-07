import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Article from './Pages/Article/Article';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  )
}

export default App
