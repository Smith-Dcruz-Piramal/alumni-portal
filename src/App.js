import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Login } from "./Login";
import { Events } from "./Events";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}
