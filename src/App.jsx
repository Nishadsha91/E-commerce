import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Default toast styles



import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Header from './components/Header';
import Products from './pages/Products';
import Footer from './components/Footer';
import Clothes from './pages/Clothes';
import Toys from './pages/Toys';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';

import AdminDashboard from './admin/AdminDashboard';
import ManageProducts from './admin/ManageProducts';
import ManageOrders from './admin/ManageOrders';
import ManageUsers from './admin/ManageUsers';
import AddProduct from './admin/AddProducts';
import EditProduct from './admin/EditProducts';
import UpdateOrder from './admin/UpdateOrder';
import EditUser from './admin/EditUser';
import OrderPage from './pages/OrderPage';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  const hideHeaderRoutes = ['/login', '/registration'];
  const hideFooterRoutes = ['/login', '/registration'];

  const shouldHideHeader = isAdminRoute || hideHeaderRoutes.includes(location.pathname);
  const shouldHideFooter = isAdminRoute || hideFooterRoutes.includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeader && <Header />}

      <main className="flex-1">
        <Routes>
          {/* user module */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/orderpage" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />

          {/* admin module */}
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><ManageProducts /></AdminRoute>} />
          <Route path="/admin/orders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
          <Route path="/admin/addproducts" element={<AdminRoute><AddProduct/></AdminRoute>}/>
          <Route path="/admin/editproduct/:id" element={<AdminRoute><EditProduct/></AdminRoute>}/>
          <Route path="/admin/updateorder/:id" element={<AdminRoute><UpdateOrder/></AdminRoute>}/>
          <Route path="/admin/edituser/:id" element={<AdminRoute><EditUser/></AdminRoute>}/>
        </Routes>
      </main>

      {!shouldHideFooter && <Footer />}

       <ToastContainer 
        position="top-right"
        autoClose={2000} // Auto-close after 3 seconds
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
