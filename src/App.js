
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Page/Home/Footer/Footer';
import Header from './Page/Home/Header/Header';
import Home from './Page/Home/Home/Home';
import Services from './Page/Services/Services';
import AboutUs from './Page/Home/AboutUs/AboutUs';
import ContactUs from './Page/Home/ContactUs/ContactUs';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
