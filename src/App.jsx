import './App.css'
import NavBar from './Components/NavBar/NavBar';
import DashBorad from './Pages/Admin/DashBorad';
import AllProduct from './Pages/All_product/AllProduct';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Order from './Pages/Order/Order';
import NoPage from './Pages/Nopage/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<DashBorad />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allProduct' element={<AllProduct />} />
          <Route path='/order' element={<Order />} />
          <Route path='/*' element={<NoPage />} />
   

        </Routes>
      </Router>

    </BrowserRouter>
  )
}

export default App;
