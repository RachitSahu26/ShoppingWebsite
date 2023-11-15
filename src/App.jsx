import DashBorad from './Pages/Admin/DashBorad';
import AllProduct from './Pages/All_product/AllProduct';
import Cart from './Pages/Cart/Cart';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Order from './Pages/Order/Order';
import NoPage from './Pages/Nopage/NoPage';
import Home from './Pages/Home/Home';
import MyState from './Contexts/Data/MyState';
import Login from './Pages/Registration/Login';
import Signup from './Pages/Registration/Signup';
import AddProduct from './Pages/Admin/page/AddProduct';
import UpdateProduct from './Pages/Admin/page/UpdateProduct';
// import ProductCard from './Components/ProductCard/ProductCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Children } from 'react';
function App() {
  return (

    <MyState>

      <Router>
        <Routes>


          <Route path='/' element={<Home />} />

          <Route path='/admin' element={
          
          <protectRouteForAdmin>
          <DashBorad />

          </protectRouteForAdmin>
          
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allProduct' element={<AllProduct />} />

          <Route path='/order' element={

            <protectRoute>

              <Order />
            </protectRoute>


          }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/sigup' element={<Signup />} />
          <Route path='/addproduct' element={

            <protectRouteForAdmin>
              <AddProduct />
            </protectRouteForAdmin>

          } />
          <Route path='/updateproduct' element={

            <protectRouteForAdmin>
              <UpdateProduct />

            </protectRouteForAdmin>

          } />

          <Route path='/' element={<NoPage />} />


        </Routes>

        <ToastContainer />

      </Router>
    </MyState>











  )
}

export default App;


// .......................protected route...........
export const protectRoute = ({ children }) => {
  const user = localStorage.getItem('userdata')
  if (user) {
    return children
  }
  else {

    return <Navigate to={'/login'} />

  }
}




// .......................protected route...........
export const protectRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('userdata'))
  if (admin.user.email === "rachitsahu016@gmail.com") {
    return children
  }
  else {

    return <Navigate to={'/login'} />

  }
}