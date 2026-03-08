import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import WishList from "./pages/WishList"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Toaster position="top-center" 
    toastOptions={{  duration: 1000,
    style: {
      background: "#111",
      color: "#fff",
      borderRadius: "40px",},}} reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
