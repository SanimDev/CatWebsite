// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './pages/cats';
import Home from './pages';
import { UploadPage } from './pages/upload';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={<Home/>}></Route>
      <Route exact path ="/cat" element={<Cats/>}></Route>
      <Route exact path ="/upload" element={<UploadPage/>}></Route>
      <Route exact path ="/about" element={<About/>}></Route>
    
    </Routes>
  );
}

export default App;
