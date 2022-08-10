import './App.css';
import Achievements from './Pages/LandingPage/Achievements';
import Banner from './Pages/LandingPage/Banner';
import Contests from './Pages/LandingPage/Contests';
import Navber from './Pages/LandingPage/Navber';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/LandingPage/Home';
import All from './Pages/LandingPage/All';
import Nature from './Pages/LandingPage/Nature';
import Hills from './Pages/LandingPage/Hills';
import Modal from './Pages/LandingPage/Modal';
import Product from './Pages/LandingPage/Product';
import ThreeD from './Pages/LandingPage/ThreeD';
import Fashion from './Pages/LandingPage/Fashion';
import Others from './Pages/LandingPage/Others';
function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contest" element={<Contests />}>
          <Route index="*" element={<All />}></Route>
          <Route path="nature" element={<Nature />}></Route>
          <Route path="hills" element={<Hills />}></Route>
          <Route path="model" element={<Modal/>}></Route>
          <Route path="product" element={<Product/>}></Route>
          <Route path="3d" element={<ThreeD/>}></Route>
          <Route path="fashion" element={<Fashion/>}></Route>
          <Route path="others" element={<Others/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
