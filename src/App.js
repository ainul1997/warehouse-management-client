
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Page/Home/Footer/Footer';
import Header from './Page/Home/Header/Header';
import Home from './Page/Home/Home/Home';
import Services from './Page/Services/Services';

import ContactUs from './Page/Home/ContactUs/ContactUs';
import Login from './Page/Login/Login/Login';

import ProductionDetail from './Page/ProductionDetail/ProductionDetail';
import Register from './Page/Login/Register/Register';
import ManageInvan from './Page/Home/ManageInvan/ManageInvan';
import RequirAuth from './Page/RequirAuth/RequirAuth';
import Blogs from './Page/Blogs/Blogs';
import NotFound from './Page/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/production/:productionId' element={
          <RequirAuth><ProductionDetail></ProductionDetail></RequirAuth>
        }></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/manage' element={<ManageInvan></ManageInvan>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
