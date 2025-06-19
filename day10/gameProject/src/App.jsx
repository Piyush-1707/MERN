import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}
