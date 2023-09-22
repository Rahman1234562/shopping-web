import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./compnents/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/card/Cart";
import { ShopContextProvider } from "./context/Shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
