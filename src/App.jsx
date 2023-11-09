import DashBorad from './Pages/Admin/DashBorad';
import AllProduct from './Pages/All_product/AllProduct';
import Cart from './Pages/Cart/Cart';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Order from './Pages/Order/Order';
import NoPage from './Pages/Nopage/NoPage';
import Home from './Pages/Home/Home';
import MyState from './Contexts/Data/MyState';
import Login from './Pages/Registration/Login';
import Signup from './Pages/Registration/Signup';

function App() {
  return (

<MyState>

    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<DashBorad />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/allProduct' element={<AllProduct />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<Login/>} />
       <Route path='/sigup' element={<Signup/>} />
       <Route path='/*' element={<NoPage />} />  

      </Routes>
    </Router>
    </MyState>











  )
}

export default App;
