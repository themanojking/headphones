import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Joysticks from './Pages/ProductCategories/Joysticks';
import SmartWatch from './Pages/ProductCategories/SmartWatch';
import Headphone from './Pages/ProductCategories/Headphone';
import Audiospeaker from './Pages/ProductCategories/Audiospeaker';
import Virtualreality from './Pages/ProductCategories/Virtualreality';
import Login from './Pages/Login/Login';
import Newsign from './Pages/Login/Newsign';


function App() {
  return (
    <>
    <div className=''>
      <BrowserRouter>
         <Routes>
           <Route path='/home' element={<Home />}></Route>
           <Route path='/shop' element={<Shop/>}></Route>
           <Route path='/about' element={<About />}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/cart' element={<Cart />}></Route>
           <Route path='/joysticks'element={<Joysticks />}></Route>
           <Route path='/smartwatchs' element={<SmartWatch />}></Route>
           <Route path='/headphones' element={<Headphone />}></Route>
           <Route path='/audiospeakers' element={<Audiospeaker />}></Route>
           <Route path='/virtualrealitys' element={<Virtualreality />}></Route>
           <Route path='/' element={<Login />}></Route>
           <Route path='/signup' element={<Newsign />}></Route>
         </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
