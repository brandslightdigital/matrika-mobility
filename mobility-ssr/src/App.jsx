// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/navBar';
import Footer from './components/footer';
import PopupForm from './components/popupForm';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import { PopupProvider } from './components/PopupContext';
import FleetPage from './pages/OurFleet';
import CorporatePage from './pages/Corporate';
import ScrollToTop from './components/ScrolltoTop';


export default function App() {
  return (
    <>
    <PopupProvider>
      <ScrollToTop/>
    <Navbar/>
    <PopupForm/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutPage/>}/>
      <Route path="/contact-us" element={<ContactPage/>}/>
      <Route path="/our-fleet" element={<FleetPage/>}/>
      <Route path= "/corporate" element={<CorporatePage/>}/>
    </Routes>
    <Footer/>
    </PopupProvider>
    </>
  );
}
