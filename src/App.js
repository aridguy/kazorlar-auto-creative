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
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Appointment from "./pages/Appointment";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* Dashboard Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/projects" element={<Projects />} />
            {/* Catch-all route redirects unknown paths to login */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
