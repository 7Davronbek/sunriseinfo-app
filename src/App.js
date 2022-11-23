import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import InKatalog from './components/Katalog/InKatalog/InKatalog';
import InCatalog2 from './components/Katalog/InKatalog/InCatalog2';
import Katalog from './components/Katalog/Katalog';
import Navbar from './components/Navbar/Navbar';
import Orgotexnika from './components/Orgotextnika/Orgotexnika';
import OurWork from './components/OurWork/OurWork';
import Solnechnaya from './components/Solnechnaya/Solnechnaya';
import Catalog2 from './pages/Catalog2';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/orgotexnika' element={<Orgotexnika />} />
        <Route path='/solnechnaya' element={<Solnechnaya />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/ourwork' element={<OurWork />} />

        <Route path='/katalog' element={<Katalog />} />
        <Route path='/katalog-2' element={<Catalog2 />} />
        <Route path='/see-catalog-2/:id' element={<InCatalog2 />} />

        <Route path='/see-catalog/:id' element={<InKatalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
