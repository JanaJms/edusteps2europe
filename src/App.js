import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Views/About';
import ContactUs from './Views/ContactUs';
import FAQ from './Views/FAQ';
import Home from './Views/Home';
import Packages from './Views/Packages';
import Services from './Views/Services';
import Appartments from './Views/Appartments';

function App() {
  return (
    <div className="App w-full min-h-screen">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="packages" element={<Packages />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="appartments" element={<Appartments />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
