// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* Dashboard Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/appointment" element={<Appointment />} />
            {/* Catch-all route redirects unknown paths to login */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
