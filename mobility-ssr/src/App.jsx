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
import PrivacyTermsPage from './pages/PrivacyPolicies';
import TermsConditionsPage from './pages/Terms&Condition';
import AirportTransferPage from './pages/AirportTransfer';
import OutstationTransferPage from './pages/OutStation';
import ServicesPage from './pages/Service';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogDetails';


export default function App() {
  return (
    <>
      <PopupProvider>
        <ScrollToTop />
        <Navbar />
        {/* <PopupForm /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/our-fleet" element={<FleetPage />} />
          <Route path="/corporate-protocol" element={<CorporatePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/privacy-policies" element={<PrivacyTermsPage />} />
          <Route path="/term-condition" element={<TermsConditionsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/airport-transfer" element={<AirportTransferPage />} />
          <Route path="/out-station" element={<OutstationTransferPage />} />
        </Routes>
        <Footer />
      </PopupProvider>
    </>
  );
}
