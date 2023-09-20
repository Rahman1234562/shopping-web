import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./compnents/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Card } from "./pages/card/Card";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
