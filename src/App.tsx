import React from 'react';
import './App.css';
import "./assets/scss/main.scss";
import "slick-carousel/slick/slick.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import DashBoard from './Pages/Dashboard';
import UserProfileAccount from './Components/UserProfileAccount';
import Category from './Components/Category';
import CustomerService from './Pages/CostomerService';
import Success from './Components/Success';
import BestSellers from './Pages/BestSellers';
import BecomeSeller from './Pages/BecomeSeller';
import SubcategoryPage from './Pages/SubCategoryPage';
import ServiceDetails from './Pages/ServiceDetails';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/create-account' element={<Signup />} />
        <Route path='/user/dashboard' element={<DashBoard />} />
        <Route path='/user/profileAccount' element={< UserProfileAccount />} />
        <Route path='/category/:id/:slug' element={<Category />} />
        <Route path='/customer-service' element={<CustomerService />} />
        <Route path='/customer-service-success' element={<Success />} />
        <Route path='/best-seller' element={<BestSellers />} />
        <Route path='/become-seller-form' element={<BecomeSeller />} />
        <Route path='/category/particular/:catId/:subCatId' element={<SubcategoryPage />} />
        <Route path='/service-detail/:serviceId/:sellerId' element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
