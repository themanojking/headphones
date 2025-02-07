import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
// import { Provider } from 'react-redux';
// import store from './Redux/Store';


function App() {
  return (
    <>
    <div className=''>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/shop' element={<Shop/>}></Route>
           <Route path='/about' element={<About />}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/cart' element={<Cart />}></Route>
         </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
