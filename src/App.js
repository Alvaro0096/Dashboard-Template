import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Products from './pages/Products';
import Services from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
